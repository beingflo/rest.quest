import { Component, createEffect, createSignal, For, Show } from 'solid-js';
import Project from './Project';
import tinykeys from 'tinykeys';
import { validateEvent } from './utils';
import { useStore } from './store';

const Projects: Component = () => {
  const [state, { newProject, setSelectedProject, changeSelectedProject }] =
    useStore();
  const [newProjectMode, setNewProjectMode] = createSignal(false);
  const [newProjectName, setNewProjectName] = createSignal('');

  let inputRef;

  const onEdit = () => {
    setNewProjectMode(true);
    inputRef.focus();
  };

  tinykeys(window, {
    p: validateEvent(onEdit),
    Escape: () => setNewProjectMode(false),
    ArrowUp: () => changeSelectedProject('UP'),
    ArrowDown: () => changeSelectedProject('DOWN'),
  });

  const onEditEnd = () => {
    const projectId = newProject(newProjectName());
    setNewProjectMode(false);
    setSelectedProject(projectId);
  };

  const projects = () =>
    state.projectList?.filter((project) => !project.deleted) ?? [];

  return (
    <div class="w-1/5 h-screen p-4 flex overflow-y-scroll">
      <div class="my-auto w-full">
        <For each={projects()}>
          {(project: any) => (
            <Project
              project={{ ...state.projectMap[project.id], id: project.id }}
            />
          )}
        </For>
        <Show when={newProjectMode()}>
          <form onSubmit={onEditEnd}>
            <input
              class="rounded-sm focus:outline-none"
              ref={inputRef}
              type="text"
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
