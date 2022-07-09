import { Component, createSignal, For, onCleanup, Show } from 'solid-js';
import Quest from './Quest';
import tinykeys from 'tinykeys';
import { validateEvent } from './utils';
import { useStore } from './store';
import { Quest as QuestType } from './types';

const Quests: Component = () => {
  const [state, { addQuest, toggleView }] = useStore();
  const [newQuestMode, setNewQuestMode] = createSignal(false);
  const [newQuestName, setNewQuestName] = createSignal('');

  let inputRef;

  const onEdit = () => {
    setNewQuestMode(true);
    inputRef?.focus();
  };

  const cleanup = tinykeys(window, {
    n: validateEvent(onEdit),
    Escape: () => setNewQuestMode(false),
    v: validateEvent(toggleView),
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
    const currentProject = state.projectMap[state.selectedProject];

    if (!currentProject) {
      return [];
    }

    if (!state.view) {
      return currentProject?.quests ?? [];
    } else {
      return currentProject?.quests?.filter((quest) => !quest.complete) ?? [];
    }
  };

  return (
    <Show
      when={!state.view}
      fallback={
        <div class="w-full">
          <div class="mx-auto w-96 py-4">
            <For each={quests()}>
              {(quest) => <Quest quest={quest as QuestType} />}
            </For>
            <Show when={newQuestMode()}>
              <NewQuestInput />
            </Show>
          </div>
        </div>
      }
    >
      <div class="w-full pt-4">
        <div class="grid grid-cols-4 gap-1">
          <For each={quests()}>
            {(quest) => <Quest quest={quest as QuestType} />}
          </For>
          <Show when={newQuestMode()}>
            <NewQuestInput />
          </Show>
        </div>
      </div>
    </Show>
  );
};

export default Quests;
