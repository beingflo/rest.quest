import { createSignal, For } from 'solid-js';
import Quest from './Quest';
import { useStore } from './store';

const Quests = () => {
  const [state] = useStore();
  const [quests, setQuests] = createSignal([]);

  let i = 0;
  while (i < 20) {
    setQuests([...quests(), 'quest ' + i]);
    i += 1;
  }

  return (
    <div class="w-full">
      <div class="mx-auto w-96">
        <For each={quests()}>
          {(quest) => (
            <Quest
              questName={quest}
              setName={(name) => console.log(name)}
              checkQuest={() => console.log('check ' + quest)}
            />
          )}
        </For>
      </div>
    </div>
  );
};

export default Quests;
