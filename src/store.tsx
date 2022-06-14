import { createContext, createEffect, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';

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
      add(project, quest) {
        setState((s) => ({}));
      },
      update(project, quest) {
        setState((s) => ({}));
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
