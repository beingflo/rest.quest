import { Component } from "solid-js";
import { useStore } from "./store";
import { Project as ProjectType } from "./types";

export type Props = {
  project: ProjectType;
};

const Project: Component<Props> = (props: Props) => {
  const [state, { setSelectedProject, deleteProject }] = useStore();

  const setSelection = () => {
    setSelectedProject(props.project.id);
  };

  return (
    <div class="group flex flex-row gap-1 items-baseline">
      <div
        onClick={setSelection}
        class={`truncate cursor-pointer ${
          state.selectedProject === props.project.id && "underline"
        }`}
      >
        {props.project.name || "unnamed"}
      </div>
      <div
        onClick={() => deleteProject(props.project.id)}
        class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer"
      >
        Del
      </div>
    </div>
  );
};

export default Project;
