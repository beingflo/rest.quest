import { createContext, createEffect, useContext } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { Quest } from './types';
import { getNewId } from './utils';

const name = 'store';

const StoreContext = createContext({});

export function StoreProvider(props) {
  const localState = localStorage.getItem(name);

  const [state, setState] = createStore(
    localState ? JSON.parse(localState) : {}
  );

  createEffect(() => localStorage.setItem(name, JSON.stringify(state)));

  const store = [
    state,
    {
      toggleView() {
        setState({ view: !state.view });
      },
      setSelectedProject(projectId: string) {
        setState({ ...state, selectedProject: projectId });
      },
      changeSelectedProject(direction: 'UP' | 'DOWN') {
        setState(
          produce((state: any) => {
            const selectedProjectIndex = state.projects.findIndex(
              (project) => project.id === state.selectedProject
            );

            const newIndexDirection = direction === 'UP' ? -1 : 1;
            let newIndex = selectedProjectIndex;
            do {
              newIndex = newIndex + newIndexDirection;
              if (newIndex < 0) {
                newIndex = state.projects.length - 1;
              }
              if (newIndex >= state.projects.length) {
                newIndex = 0;
              }
            } while (state.projects[newIndex].deleted);

            state.selectedProject = state.projects[newIndex].id;
          })
        );
      },
      addProject(project: string) {
        const id = getNewId();

        setState({
          projects: [
            ...(state.projects ?? []),
            { id, name: project, quests: [] },
          ],
        });

        return id;
      },
      renameProject(projectId: string, newName: string) {
        setState(
          'projects',
          (project) => project.id === projectId,
          'name',
          (_) => newName
        );
      },
      deleteProject(projectId: string) {
        setState(
          'projects',
          (project) => project.id === projectId,
          'deleted',
          (_) => true
        );
      },
      addQuest(name: string) {
        if (!state.projects) {
          return;
        }

        setState(
          produce((state: any) => {
            const selectedProject = state.projects.find(
              (project) => project.id === state.selectedProject
            );

            selectedProject.quests.push({
              id: getNewId(),
              name,
              created_at: Date.now(),
            });
          })
        );
      },
      renameQuest(questId: string, newName: string) {
        setState(
          produce((state: any) => {
            const allQuests = state.projects.flatMap(
              (project) => project.quests
            );

            const quest = allQuests?.find(
              (quest: Quest) => quest.id === questId
            );

            if (quest) {
              quest.name = newName;
            }
          })
        );
      },
      completeQuest(questId: string) {
        setState(
          produce((state: any) => {
            const allQuests = state.projects.flatMap(
              (project) => project.quests
            );

            const quest = allQuests?.find(
              (quest: Quest) => quest.id === questId
            );

            if (quest) {
              quest.complete = true;
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
