import { Component, createSignal, For } from 'solid-js';
import Project from './Project';
import tinykeys from 'tinykeys';
import { validateEvent } from './utils';

const Projects: Component = () => {
  const [projects, setProjects] = createSignal([]);

  let i = 0;
  while (i < 20) {
    setProjects([...projects(), 'test' + i]);
    i += 1;
  }

  tinykeys(window, {
    l: validateEvent(() => 'adding project'),
  });

  return (
    <div class="w-1/5 h-screen p-4 flex overflow-y-scroll">
      <div class="my-auto">
        <For each={projects()}>
          {(project) => (
            <Project
              projectName={project}
              setName={(name) => console.log(name)}
              deleteProject={() => undefined}
            />
          )}
        </For>
      </div>
    </div>
  );
};

export default Projects;
