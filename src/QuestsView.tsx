import { createSignal, For, Show } from 'solid-js';
import Quest from './Quest';
import tinykeys from 'tinykeys';
import { validateEvent } from './utils';
import { useStore } from './store';
import { Quest as QuestType } from './types';

const Quests = () => {
  const [state, { addQuest }] = useStore();
  const [newQuestMode, setNewQuestMode] = createSignal(false);
  const [newQuestName, setNewQuestName] = createSignal('');

  tinykeys(window, {
    n: validateEvent(() => setNewQuestMode(true)),
  });

  const onEditEnd = () => {
    addQuest(newQuestName());
    setNewQuestMode(false);
  };

  const quests = () =>
    state.projects
      ?.find((project) => project.id === state.selectedProject)
      ?.quests?.filter((quest) => !quest.complete) ?? [];

  return (
    <div class="w-full">
      <div class="mx-auto w-96 pt-4">
        <For each={quests()}>
          {(quest) => <Quest quest={quest as QuestType} />}
        </For>
        <Show when={newQuestMode()}>
          <form onSubmit={onEditEnd}>
            <input
              class="bg-gray-100 rounded-sm focus:outline-none"
              type="text"
              autofocus
              onBlur={onEditEnd}
              onInput={(event) => setNewQuestName(event?.currentTarget.value)}
            />
          </form>
        </Show>
      </div>
    </div>
  );
};

export default Quests;
