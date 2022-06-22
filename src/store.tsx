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
      setSelectedProject(projectId: string) {
        setState({ ...state, selectedProject: projectId });
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
        const remainingProjects =
          state.projects?.filter((project) => project.id !== projectId) ?? [];

        setState({
          projects: [...remainingProjects],
        });
      },
      addQuest(name: string) {
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
