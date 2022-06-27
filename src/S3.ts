import { AwsClient } from 'aws4fetch';
import { unwrap } from 'solid-js/store';
import { Project } from './types';

type Index = Array<{ id: string; deleted: boolean }>;

const IndexFile = 'index.json';

export const s3Sync = async (projectId: string, state: any) => {
  if (!state?.s3) {
    return;
  }

  const aws = new AwsClient({
    accessKeyId: state?.s3?.apiKey,
    secretAccessKey: state?.s3?.apiSecretKey,
    service: 's3',
    region: state?.s3?.region,
  });

  await syncIndex(aws, state, () => undefined);
  await syncProject(aws, projectId, state);
};

const syncIndex = async (aws: any, state: any, deleteProject: any) => {
  const indexResponse = await aws.fetch(`${state?.s3?.endpoint}${IndexFile}`, {
    method: 'GET',
  });
  const remoteIndex: Index =
    indexResponse.status === 200 ? await indexResponse.json() : [];
  const { index, toCreate, toDelete } = mergeIndex(remoteIndex, state);

  await aws.fetch(`${state?.s3?.endpoint}${IndexFile}`, {
    method: 'PUT',
    body: JSON.stringify(index),
  });

  toDelete.map((idx) => deleteProject(idx));
  toCreate.map((idx) => syncProject(aws, idx, state));
};

const syncProject = async (aws: any, projectId: string, state: any) => {
  const projectResponse = await aws.fetch(
    `${state?.s3?.endpoint}${projectId}`,
    {
      method: 'GET',
    }
  );
  const project =
    projectResponse.status === 200 ? await projectResponse.json() : {};
  const newProject = mergeProject(project, state, projectId);

  await aws.fetch(`${state?.s3?.endpoint}${projectId}`, {
    method: 'PUT',
    body: JSON.stringify(newProject),
  });
};

const mergeProject = (
  project: Project,
  state: any,
  projectId: string
): Project => {
  const localProject = state.projects?.find((proj) => proj.id === projectId);

  const newProject: Project = unwrap({ ...localProject });
  if (project.modified_at > localProject.modified_at) {
    newProject.name = project.name;
    newProject.modified_at = project.modified_at;
  }

  const questMap = new Map();
  localProject?.quests?.map((quest) => questMap.set(quest.id, unwrap(quest)));

  project?.quests?.map((quest) => {
    if (questMap.has(quest.id)) {
      if (quest.complete) {
        questMap.get(quest.id).complete = true;
      }
      if (questMap.get(quest.id).modified_at < quest.modified_at) {
        questMap.get(quest.id).name = quest.name;
      }
    } else {
      questMap.set(quest.id, quest);
    }
  });

  const quests = [...questMap.values()];
  quests?.sort((a, b) => a.modified_at - b.modified_at);

  return { ...newProject, quests };
};

const mergeIndex = (
  index: Index,
  state: any
): { index: Index; toCreate: Array<string>; toDelete: Array<string> } => {
  const localIndex = state?.projects?.map((project) => ({
    id: project.id,
    deleted: project.deleted ?? false,
  }));

  const indexMap = new Map();

  localIndex?.forEach((idx) => {
    indexMap.set(idx.id, idx.deleted);
  });

  const toDelete = [];
  const toCreate = [];
  index?.forEach((idx) => {
    if (indexMap.has(idx.id)) {
      if (idx.deleted && indexMap.get(idx.id)) {
        toDelete.push(idx.id);
        indexMap.set(idx.id, true);
      }
    } else {
      toCreate.push(idx.id);
      indexMap.set(idx.id, idx.deleted);
    }
  });

  return {
    index: [...indexMap].map(([key, value]) => ({
      id: key,
      deleted: value,
    })),
    toCreate,
    toDelete,
  };
};
