import { AwsClient } from 'aws4fetch';
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

  await syncIndex(aws, state);
  await syncProject(aws, state, projectId);
};

const syncProject = async (aws: any, state: any, projectId: string) => {
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

const syncIndex = async (aws: any, state: any) => {
  const indexResponse = await aws.fetch(`${state?.s3?.endpoint}${IndexFile}`, {
    method: 'GET',
  });
  const index: Index =
    indexResponse.status === 200 ? await indexResponse.json() : [];
  const newIndex = mergeProjects(index, state);

  await aws.fetch(`${state?.s3?.endpoint}${IndexFile}`, {
    method: 'PUT',
    body: JSON.stringify(newIndex),
  });
};

const mergeProject = (
  project: Project,
  state: any,
  projectId: string
): Project => {
  return state.projects?.find((proj) => proj.id === projectId);
};

const mergeProjects = (index: Index, state: any): Index => {
  const localIndex = state?.projects?.map((project) => ({
    id: project.id,
    deleted: project.deleted ?? false,
  }));

  const commonIndexMap = new Map();

  index?.forEach((idx) => {
    if (commonIndexMap.has(idx.id)) {
      if (idx.deleted) {
        commonIndexMap.set(idx.id, true);
      }
    } else {
      commonIndexMap.set(idx.id, idx.deleted);
    }
  });

  localIndex?.forEach((idx) => {
    if (commonIndexMap.has(idx.id)) {
      if (idx.deleted) {
        commonIndexMap.set(idx.id, true);
      }
    } else {
      commonIndexMap.set(idx.id, idx.deleted);
    }
  });

  return [...commonIndexMap].map(([key, value]) => ({
    id: key,
    deleted: value,
  }));
};
