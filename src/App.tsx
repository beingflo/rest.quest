import { Component, createEffect, createSignal, Show } from 'solid-js';
import ProjectsList from './ProjectsList';
import { useStore } from './store';
import QuestsView from './QuestsView';
import tinykeys from 'tinykeys';
import { validateEvent } from './utils';
import Help from './Help';
import Configuration from './Configuration';

const App: Component = () => {
  const [state, { addProject, setSelectedProject, addQuest }] = useStore();
  const [showApp, setShowApp] = createSignal(!!state.projectList);
  const [showConfig, setShowConfig] = createSignal(false);

  tinykeys(window, {
    h: validateEvent(() => setShowApp(!showApp())),
    c: validateEvent(() => setShowConfig(!showConfig())),
  });

  if (!state.projectList) {
    const projectId = addProject('Get started');
    setSelectedProject(projectId);
    addQuest('Open help again with h');
    addQuest('Add a new quest');
    addQuest('Check off the quest');
    addQuest('Add a new project');
    addQuest('Switch between projects');
    addQuest('Edit or delete a project');
  }

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
