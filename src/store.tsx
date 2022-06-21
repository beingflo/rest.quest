import { createContext, createEffect, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { getNewId } from './utils';

const name = 'quests';

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
        setState({ selectedProject: projectId });
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
          (name) => newName
        );
      },
      deleteProject(projectId: string) {
        const remainingProjects =
          state.projects?.filter((project) => project.id !== projectId) ?? [];

        setState({
          projects: [...remainingProjects],
        });
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
