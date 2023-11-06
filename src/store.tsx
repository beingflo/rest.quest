import { createContext, createEffect, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { Quest } from "./types";
import { getNewId } from "./utils";
import { migrateDataV2 } from "./store-utils";

export const storeName = "store";

const StoreContext = createContext({});

const localState = localStorage.getItem(storeName);

let parsedState = localState ? JSON.parse(localState) : { data_version: 2 };

if (parsedState.data_version !== 2) {
  parsedState = migrateDataV2(parsedState);
}

export const [state, setState] = createStore(parsedState);

export function StoreProvider(props) {
  createEffect(() => localStorage.setItem(storeName, JSON.stringify(state)));

  const store = [
    state,
    {
      toggleView() {
        setState({ view: ((state.view ?? 0) + 1) % 3 });
      },
      toggleHelp() {
        setState({ help: !state.help });
      },
      setSelectedProject(projectId: string) {
        setState({ selectedProject: projectId });
      },
      setS3Config(config: Object) {
        setState({ s3: config });
      },
      changeSelectedProject(direction: "UP" | "DOWN") {
        setState(
          produce((state: any) => {
            const selectedProjectIndex = state.projectList.findIndex(
              (project) => project.id === state.selectedProject
            );

            const newIndexDirection = direction === "UP" ? -1 : 1;
            let newIndex = selectedProjectIndex;
            do {
              newIndex = newIndex + newIndexDirection;
              if (newIndex < 0) {
                newIndex = state.projectList.length - 1;
              }
              if (newIndex >= state.projectList.length) {
                newIndex = 0;
              }
            } while (state.projectList[newIndex].deletedAt);

            state.selectedProject = state.projectList[newIndex].id;
          })
        );
      },
      newProject(project: string) {
        const id = getNewId();

        setState({
          projectList: [
            ...(state.projectList ?? []),
            {
              id,
              name: project,
              createdAt: Date.now(),
              modifiedAt: Date.now(),
              deletedAt: null,
            },
          ],
        });

        return id;
      },
      deleteProject(projectId: string) {
        setState(
          produce((state: any) => {
            const selectedProject = state.projectList.find(
              (project) => project.id === projectId
            );

            state.questList
              ?.filter((q) => q.projectId === projectId)
              ?.forEach((q) => {
                q.completedAt = Date.now();
              });

            selectedProject.deletedAt = Date.now();
          })
        );
      },
      addQuest(name: string) {
        if (
          !state.selectedProject ||
          !state.projectList?.find(
            (project) => project.id === state.selectedProject
          )
        ) {
          return;
        }

        setState({
          questList: [
            ...(state.questList ?? []),
            {
              id: getNewId(),
              name,
              projectId: state.selectedProject,
              createdAt: Date.now(),
              completedAt: null,
            },
          ],
        });
      },
      completeQuest(questId: string) {
        setState(
          produce((state: any) => {
            const quest = state.questList?.find((q) => q.id === questId);
            if (quest) {
              quest.completedAt = Date.now();
            }
          })
        );
      },
      compactProject(projectId: string) {
        setState(
          produce((state: any) => {
            const project = state.projectList?.find((p) => p.id === projectId);

            if (project && !project.deletedAt) {
              const newQuests = state?.questList?.filter(
                (quest) => quest.projectId !== projectId || !quest.completedAt
              );
              state.questList = newQuests;
            }
          })
        );
      },
    },
  ];

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext) as any;
}
