import { Quest } from "./types";

type StateV1 = {
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

type StateV2 = {
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

export const migrateDataV2 = (state: StateV1): StateV2 => {
  let quests = [];
  Object.values(state.projectMap)?.forEach((p) => {
    p.quests?.forEach((q) => {
      quests.push({
        id: q.id,
        name: q.name,
        projectId: p.id,
        createdAt: p.created_at,
        completedAt: q.complete ? Date.now() : null,
      });
    });
  });

  return {
    selectedProject: state.selectedProject,
    help: state.help,
    s3: state.s3,
    view: state.view,
    data_version: 2,
    projectList: state.projectList?.map((p) => ({
      id: p.id,
      name: state.projectMap[p.id]?.name,
      createdAt: p.created_at,
      modifiedAt: p.created_at,
      deletedAt: p.deleted ? p.created_at : null,
    })),
    questList: quests,
  };
};
