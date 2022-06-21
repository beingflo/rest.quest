import { Component, createSignal, For, Show } from 'solid-js';
import Project from './Project';
import tinykeys from 'tinykeys';
import { validateEvent } from './utils';
import { useStore } from './store';
import { Project as ProjectType } from './types';

const Projects: Component = () => {
  const [state, { addProject }] = useStore();
  const [newProjectMode, setNewProjectMode] = createSignal(false);
  const [newProjectName, setNewProjectName] = createSignal('');

  tinykeys(window, {
    l: validateEvent(() => setNewProjectMode(true)),
  });

  const onEditEnd = () => {
    setNewProjectMode(false);
    addProject(newProjectName());
  };

  return (
    <div class="w-1/5 h-screen p-4 flex overflow-y-scroll">
      <div class="my-auto">
        <For each={state.projects}>
          {(project: ProjectType) => <Project project={project} />}
        </For>
        <Show when={newProjectMode()}>
          <form onSubmit={onEditEnd}>
            <input
              class="bg-gray-100 rounded-sm focus:outline-none"
              type="text"
              autofocus
              onBlur={onEditEnd}
              onInput={(event) => setNewProjectName(event?.currentTarget.value)}
            />
          </form>
        </Show>
      </div>
    </div>
  );
};

export default Projects;
