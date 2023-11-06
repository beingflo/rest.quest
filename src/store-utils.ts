import { StateV1, StateV2 } from "./types";

export const migrateDataV2 = (state: StateV1): StateV2 => {
  let quests = [];
  Object.values(state.projectMap)?.forEach((p) => {
    p.quests?.forEach((q) => {
      quests.push({
        id: q.id,
        name: q.name,
        projectId: p.id,
        createdAt: p.created_at,
        modifiedAt: p.created_at,
        completedAt: q.complete ? Date.now() : null,
      });
    });
  });

  const newState = {
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

  return newState;
};
