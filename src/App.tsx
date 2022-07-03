import { Component, createEffect, createSignal, Show } from 'solid-js';
import ProjectsList from './ProjectsList';
import { trigger, useStore } from './store';
import QuestsView from './QuestsView';
import tinykeys from 'tinykeys';
import { validateEvent } from './utils';
import Help from './Help';
import Configuration from './Configuration';
import { s3Sync } from './s3-utils';

const App: Component = () => {
  const [
    state,
    { newProject, setSelectedProject, addQuest, deleteProject, addProject },
  ] = useStore();
  const [showApp, setShowApp] = createSignal(!!state.projectList);
  const [showConfig, setShowConfig] = createSignal(false);

  createEffect(() => {
    trigger();
    s3Sync(state?.selectedProject, state, deleteProject, addProject);
  });

  tinykeys(window, {
    h: validateEvent(() => setShowApp(!showApp())),
    c: validateEvent(() => setShowConfig(!showConfig())),
  });

  if (!state.projectList) {
    const projectId = newProject('Get started');
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
