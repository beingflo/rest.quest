import { Component, createEffect, createSignal, Show } from 'solid-js';
import ProjectsList from './ProjectsList';
import { useStore } from './store';
import QuestsView from './QuestsView';
import tinykeys from 'tinykeys';
import { validateEvent } from './utils';
import Help from './Help';
import Configuration from './Configuration';

const App: Component = () => {
  const [state] = useStore();
  const [showApp, setShowApp] = createSignal(!!state.projects);
  const [showConfig, setShowConfig] = createSignal(false);

  tinykeys(window, {
    h: validateEvent(() => setShowApp(!showApp())),
    s: validateEvent(() => setShowConfig(!showConfig())),
  });

  return (
    <Show when={showApp()} fallback={<Help />}>
      <Show when={!showConfig()} fallback={<Configuration />}>
        <div class="flex flex-row">
          <ProjectsList />
          <QuestsView />
        </div>
      </Show>
    </Show>
  );
};

export default App;
