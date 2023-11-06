export type Quest = {
  id: string;
  name: string;
  projectId: string;
  createdAt: string;
  completedAt?: string;
};

export type Project = {
  id: string;
  name: string;
  createdAt: string;
  modifiedAt: string;
  deletedAt: string;
};

export type StateV1 = {
  selectedProject: string;
  help: boolean;
  view: number;
  s3: object;
  projectList: Array<{ id: string; created_at: string; deleted: boolean }>;
  projectMap: Map<
    string,
    {
      id: string;
      name: string;
      version: number;
      created_at: string;
      quests: Array<Quest>;
    }
  >;
};

export type StateV2 = {
  selectedProject: string;
  data_version: number;
  help: boolean;
  view: number;
  s3: object;
  projectList: Array<{
    id: string;
    name: string;
    createdAt: string;
    modifiedAt: string;
    deletedAt: string;
  }>;
  questList: Array<{
    id: string;
    name: string;
    projectId: string;
    createdAt: string;
    completedAt?: string;
  }>;
};
