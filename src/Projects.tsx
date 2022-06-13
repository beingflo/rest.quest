import { For } from 'solid-js';
import Project from './Project';

export type Props = {
  projects: Array<string>;
};

const Projects = (props: Props) => {
  return (
    <div class="w-1/5 h-screen p-4 flex overflow-y-scroll">
      <div class="my-auto">
        <For each={props.projects}>
          {(project) => <Project name={project} />}
        </For>
      </div>
    </div>
  );
};

export default Projects;
