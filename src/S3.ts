import { AwsClient } from 'aws4fetch';
import { Project } from './types';

type Index = Array<{ id: string; deleted: boolean }>;

const IndexFile = 'index.json';

export const s3Sync = async (projectId: string, state: any) => {
  const aws = new AwsClient({
    accessKeyId: 'EXO985b1dfd4115eea9cbf62fab',
    secretAccessKey: 'MD9wRpVlvKUgVviyXNdEHmrmEYcYLAQnByKnTsO7mw8',
    service: 's3',
    region: 'ch-dk-2',
  });

  await syncIndex(aws, state);
  await syncProject(aws, state, projectId);
};

const syncProject = async (aws: any, state: any, projectId: string) => {
  const projectResponse = await aws.fetch(
    `https://sos-ch-dk-2.exo.io/rest.quest/${projectId}`,
    {
      method: 'GET',
    }
  );
  const project =
    projectResponse.status === 200 ? await projectResponse.json() : {};
  const newProject = mergeProject(project, state, projectId);

  await aws.fetch(`https://sos-ch-dk-2.exo.io/rest.quest/${projectId}`, {
    method: 'PUT',
    body: JSON.stringify(newProject),
  });
};

const syncIndex = async (aws: any, state: any) => {
  const indexResponse = await aws.fetch(
    `https://sos-ch-dk-2.exo.io/rest.quest/${IndexFile}`,
    {
      method: 'GET',
    }
  );
  const index: Index =
    indexResponse.status === 200 ? await indexResponse.json() : [];
  const newIndex = mergeProjects(index, state);

  await aws.fetch(`https://sos-ch-dk-2.exo.io/rest.quest/${IndexFile}`, {
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
