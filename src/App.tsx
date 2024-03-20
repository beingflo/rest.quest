import { Component, Match, onCleanup, Show, Switch } from "solid-js";
import ProjectsList from "./ProjectsList";
import { storeName, useStore } from "./store";
import QuestsView from "./QuestsView";
import { tinykeys } from "tinykeys";
import { validateEvent } from "./utils";
import Help from "./Help";
import Configuration from "./Configuration";
import { ephemeralStore } from "./ephemeralStore";
import { Feedback } from "./Feedback";

const App: Component = () => {
  const [
    state,
    { newProject, setSelectedProject, addQuest, syncState, cycleScreen },
  ] = useStore();

  const removeData = () => {
    localStorage.removeItem(storeName);
    window.location.reload();
  };

  const cleanup = tinykeys(window, {
    h: validateEvent(() => cycleScreen("help")),
    c: validateEvent(() => cycleScreen("config")),
    f: validateEvent(() => cycleScreen("feedback")),
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
    <Switch
      fallback={
        <>
          <div class="flex flex-row pr-4">
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
        </>
      }
    >
      <Match when={state.screen === "help"}>
        <Help />
      </Match>
      <Match when={state.screen === "config"}>
        <Configuration />
      </Match>
      <Match when={state.screen === "feedback"}>
        <Feedback />
      </Match>
    </Switch>
  );
};

export default App;
