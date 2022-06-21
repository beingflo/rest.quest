import { createSignal, Show } from 'solid-js';

export type Props = {
  projectName: string;
  setName: (name: string) => void;
  deleteProject: () => void;
};

const Project = (props: Props) => {
  const [isEdit, setIsEdit] = createSignal(false);
  const [name, setName] = createSignal(props.projectName);

  const onEdit = () => {
    setIsEdit(false);
    props.setName(name());
  };

  return (
    <div class="group flex flex-row gap-1 items-baseline">
      <Show
        when={isEdit()}
        fallback={<div class="cursor-pointer">{name()}</div>}
      >
        <form onSubmit={onEdit}>
          <input
            class="bg-gray-100 rounded-sm focus:outline-none"
            type="text"
            autofocus
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
        <div
          onClick={() => props.deleteProject()}
          class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer"
        >
          Del
        </div>
      </Show>
    </div>
  );
};

export default Project;
