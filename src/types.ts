export type Quest = {
  id: string;
  name: string;
  projectId: string;
  createdAt: string;
  completedAt?: string;
};

export type Project = {
  id: string;
  createdAt: string;
  modifiedAt: string;
  deletedAt: string;
};
