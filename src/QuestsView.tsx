import {
  Component,
  createEffect,
  createSignal,
  For,
  onCleanup,
  Show,
} from "solid-js";
import Quest from "./Quest";
import tinykeys from "tinykeys";
import { validateEvent } from "./utils";
import { useStore } from "./store";
import { Quest as QuestType } from "./types";

const views = ["normal", "compact", "complete"];

const Quests: Component = () => {
  const [state, { addQuest, toggleView, compactProject }] = useStore();
  const [newQuestMode, setNewQuestMode] = createSignal(false);
  const [newQuestName, setNewQuestName] = createSignal("");

  let inputRef;

  const onEdit = () => {
    setNewQuestMode(true);
    inputRef?.focus();
  };

  const cleanup = tinykeys(window, {
    n: validateEvent(onEdit),
    Escape: () => setNewQuestMode(false),
    v: validateEvent(toggleView),
    "$mod+e": validateEvent(() => compactProject(state.selectedProject)),
  });

  onCleanup(cleanup);

  const onEditEnd = (event) => {
    event?.preventDefault();

    addQuest(newQuestName());
    setNewQuestMode(false);
  };

  const NewQuestInput = () => (
    <form onSubmit={onEditEnd} class="w-full">
      <input
        class="w-full rounded-sm focus:outline-none"
        type="text"
        ref={inputRef}
        onInput={(event) => setNewQuestName(event?.currentTarget.value)}
      />
    </form>
  );

  const quests = () => {
    const questsInProject = state.questList?.filter(
      (q) => q.projectId === state.selectedProject
    );

    if (views[state.view] === "compact") {
      return questsInProject?.filter((quest) => !quest.completedAt) ?? [];
    }

    return questsInProject ?? [];
  };

  return (
    <div class="w-full pt-4">
      <div class="grid grid-cols-4 gap-1 gap-y-4">
        <For each={quests()}>
          {(quest) => (
            <Quest
              quest={quest as QuestType}
              showCompleted={views[state.view] === "complete"}
            />
          )}
        </For>
        <Show when={newQuestMode()}>
          <NewQuestInput />
        </Show>
      </div>
    </div>
  );
};

export default Quests;
