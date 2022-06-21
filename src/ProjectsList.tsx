import { Component, For } from 'solid-js';
import Project from './Project';
import tinykeys from 'tinykeys';
import { validateEvent } from './utils';
import { useStore } from './store';
import { Project as ProjectType } from './types';

const Projects: Component = () => {
  const [state, {}] = useStore();

  tinykeys(window, {
    l: validateEvent(() => 'adding project'),
  });

  return (
    <div class="w-1/5 h-screen p-4 flex overflow-y-scroll">
      <div class="my-auto">
        <For each={state.projects}>
          {(project: ProjectType) => <Project project={project} />}
        </For>
      </div>
    </div>
  );
};

export default Projects;
