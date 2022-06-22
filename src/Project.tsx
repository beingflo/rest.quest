import { createSignal, Show } from 'solid-js';
import { useStore } from './store';
import { Project as ProjectType } from './types';

export type Props = {
  project: ProjectType;
};

const Project = (props: Props) => {
  const [, { setSelectedProject, deleteProject, renameProject }] = useStore();
  const [isEdit, setIsEdit] = createSignal(false);
  const [name, setName] = createSignal(props.project.name);

  const setSelection = () => {
    setSelectedProject(props.project.id);
  };

  const onEditEnd = () => {
    renameProject(props.project.id, name());
    setIsEdit(false);
  };

  return (
    <div class="group flex flex-row gap-1 items-baseline">
      <Show
        when={isEdit()}
        fallback={
          <div onClick={setSelection} class="cursor-pointer">
            {name() || 'unnamed'}
          </div>
        }
      >
        <form onSubmit={onEditEnd}>
          <input
            class="bg-gray-100 rounded-sm focus:outline-none"
            type="text"
            value={name()}
            onBlur={onEditEnd}
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
          onClick={() => deleteProject(props.project.id)}
          class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer"
        >
          Del
        </div>
      </Show>
    </div>
  );
};

export default Project;
