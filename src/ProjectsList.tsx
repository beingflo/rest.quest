import { Component, createSignal, For, onCleanup, Show } from "solid-js";
import Project from "./Project";
import tinykeys from "tinykeys";
import { validateEvent } from "./utils";
import { useStore } from "./store";
import { Project as ProjectType } from "./types";

const Projects: Component = () => {
  const [
    state,
    { newProject, setSelectedProject, changeSelectedProject, deleteProject },
  ] = useStore();
  const [newProjectMode, setNewProjectMode] = createSignal(false);
  const [newProjectName, setNewProjectName] = createSignal("");

  let inputRef;

  const onEdit = () => {
    setNewProjectMode(true);
    inputRef?.focus();
  };

  const cleanup = tinykeys(window, {
    p: validateEvent(onEdit),
    Escape: () => setNewProjectMode(false),
    ArrowUp: () => changeSelectedProject("UP"),
    ArrowDown: () => changeSelectedProject("DOWN"),
    "$mod+d": validateEvent(() => deleteProject(state.selectedProject)),
  });

  onCleanup(cleanup);

  const onEditEnd = (event) => {
    event?.preventDefault();

    const projectId = newProject(newProjectName());
    setNewProjectMode(false);
    setSelectedProject(projectId);
  };

  const projects = () =>
    state.projectList?.filter((project) => !project.deletedAt) ?? [];

  return (
    <div class="w-1/5 h-screen p-4 flex overflow-y-auto">
      <div class="my-auto w-full">
        <For each={projects()}>
          {(project: ProjectType) => <Project project={project} />}
        </For>
        <Show when={newProjectMode()}>
          <form onSubmit={onEditEnd}>
            <input
              class="rounded-sm focus:outline-none"
              ref={inputRef}
              type="text"
              onInput={(event) => setNewProjectName(event?.currentTarget.value)}
            />
          </form>
        </Show>
      </div>
    </div>
  );
};

export default Projects;
