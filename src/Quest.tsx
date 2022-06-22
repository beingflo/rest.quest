import { createSignal, Show } from 'solid-js';
import { useStore } from './store';
import { Quest as QuestType } from './types';

export type Props = {
  quest: QuestType;
};

const Quest = (props: Props) => {
  const [, { renameQuest, completeQuest }] = useStore();
  const [isEdit, setIsEdit] = createSignal(false);
  const [name, setName] = createSignal(props.quest.name);

  const onEdit = () => {
    renameQuest(props.quest.id, name());
    setIsEdit(false);
  };

  const onComplete = () => {
    completeQuest(props.quest.id);
  };

  return (
    <div class="group flex flex-row gap-1 items-baseline w-fit">
      <Show
        when={isEdit()}
        fallback={
          <div onClick={onComplete} class="max-w-lg truncate cursor-pointer">
            {name() || 'unnamed'}
          </div>
        }
      >
        <form onSubmit={onEdit}>
          <input
            class="bg-gray-100 rounded-sm focus:outline-none"
            type="text"
            value={name()}
            onBlur={onEdit}
            onInput={(event) => setName(event?.currentTarget.value)}
          />
        </form>
      </Show>
      <Show when={!isEdit()}>
        <div
          onClick={() => setIsEdit(true)}
          class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer"
        >
          Edit
        </div>
      </Show>
    </div>
  );
};

export default Quest;
