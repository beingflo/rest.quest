import { Component, createSignal, onCleanup, Show } from "solid-js";
import ProjectsList from "./ProjectsList";
import { storeName, useStore } from "./store";
import QuestsView from "./QuestsView";
import { tinykeys } from "tinykeys";
import { validateEvent } from "./utils";
import Help from "./Help";
import Configuration from "./Configuration";
import { ephemeralStore } from "./ephemeralStore";

const App: Component = () => {
  const [
    state,
    { newProject, setSelectedProject, addQuest, syncState, toggleHelp },
  ] = useStore();
  const [showConfig, setShowConfig] = createSignal(false);

  const removeData = () => {
    localStorage.removeItem(storeName);
    window.location.reload();
  };

  const cleanup = tinykeys(window, {
    h: validateEvent(toggleHelp),
    c: validateEvent(() => setShowConfig(!showConfig())),
    s: validateEvent(syncState),
    "b y e": validateEvent(removeData),
  });

  onCleanup(cleanup);

  if (!state.projectList) {
    const projectId = newProject("Get started");
    setSelectedProject(projectId);
    addQuest("Open help again with h");
    addQuest("Add a new quest");
    addQuest("Check off the quest");
    addQuest("Add a new project");
    addQuest("Toggle the view of quests");
    addQuest("Switch between projects");
    addQuest("Delete a project");
    addQuest("Open the config");
  }

  return (
    <Show when={state.help} fallback={<Help />}>
      <Show when={!showConfig()} fallback={<Configuration />}>
        <div class="flex flex-row">
          <ProjectsList />
          <QuestsView />
        </div>
        <Show when={ephemeralStore?.showToast}>
          <div class="fixed bottom-0 right-0 grid gap-x-2 grid-cols-2 bg-white p-2 font-light text-sm">
            <p class="text-right">new</p>
            <p>
              {ephemeralStore?.new[0]} local, {ephemeralStore?.new[1]} remote
            </p>
            <p class="text-right">old</p>
            <p>
              {ephemeralStore?.dropped[0]} local, {ephemeralStore?.dropped[1]}{" "}
              remote
            </p>
          </div>
        </Show>
      </Show>
    </Show>
  );
};

export default App;
