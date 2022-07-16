import { Component, createSignal, onCleanup, Show } from 'solid-js';
import ProjectsList from './ProjectsList';
import { storeName, useStore } from './store';
import QuestsView from './QuestsView';
import tinykeys from 'tinykeys';
import { validateEvent } from './utils';
import Help from './Help';
import Configuration from './Configuration';
import { s3Sync } from './s3-utils';

const App: Component = () => {
  const [state, { newProject, setSelectedProject, addQuest, toggleHelp }] =
    useStore();
  const [showConfig, setShowConfig] = createSignal(false);

  const syncState = () => {
    s3Sync(state);
  };

  document.addEventListener('visibilitychange', syncState);

  onCleanup(() => document.removeEventListener('visibilitychange', syncState));

  const removeData = () => {
    localStorage.removeItem(storeName);
    window.location.reload();
  };

  const cleanup = tinykeys(window, {
    h: validateEvent(toggleHelp),
    c: validateEvent(() => setShowConfig(!showConfig())),
    'b y e': validateEvent(removeData),
  });

  onCleanup(cleanup);

  if (!state.projectList) {
    const projectId = newProject('Get started');
    setSelectedProject(projectId);
    addQuest('Open help again with h');
    addQuest('Add a new quest');
    addQuest('Check off the quest');
    addQuest('Add a new project');
    addQuest('Toggle the view of quests');
    addQuest('Switch between projects');
    addQuest('Delete a project');
    addQuest('Open the config');
  }

  return (
    <Show when={state.help} fallback={<Help />}>
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
