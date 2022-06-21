import { createSignal, Show } from 'solid-js';

export type Props = {
  questName: string;
  setName: (name: string) => void;
  checkQuest: () => void;
};

const Quest = (props: Props) => {
  const [isEdit, setIsEdit] = createSignal(false);
  const [name, setName] = createSignal(props.questName);

  const onEdit = () => {
    setIsEdit(false);
    props.setName(name());
  };

  return (
    <div class="group flex flex-row gap-1 items-baseline w-fit">
      <Show
        when={isEdit()}
        fallback={
          <div
            onClick={() => props.checkQuest()}
            class="max-w-lg truncate cursor-pointer"
          >
            {name()}
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
