import { Component, createEffect, createSignal, Show } from 'solid-js';
import ProjectsList from './ProjectsList';
import { useStore } from './store';
import QuestsView from './QuestsView';
import tinykeys from 'tinykeys';
import { validateEvent } from './utils';
import Help from './Help';

const App: Component = () => {
  const [state] = useStore();
  const [showApp, setShowApp] = createSignal(!!state.projects);

  tinykeys(window, {
    h: validateEvent(() => setShowApp(!showApp())),
  });

  return (
    <Show when={showApp()} fallback={<Help />}>
      <div class="flex flex-row">
        <ProjectsList />
        <QuestsView />
      </div>
    </Show>
  );
};

export default App;
