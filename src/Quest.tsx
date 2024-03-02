import { Component, Show, createSignal } from "solid-js";
import { useStore } from "./store";
import { Quest as QuestType } from "./types";

export type Props = {
  quest: QuestType;
  showCompleted?: boolean;
};

const Quest: Component<Props> = (props: Props) => {
  const [, { completeQuest, uncompleteQuest, renameQuest }] = useStore();
  const [isEdit, setIsEdit] = createSignal(false);
  const [name, setName] = createSignal(props.quest.name);

  let inputRef;

  const onEdit = () => {
    setIsEdit(true);
    inputRef.focus();
  };

  const onEditEnd = () => {
    renameQuest(props.quest.id, name());
    setIsEdit(false);
  };

  const onClick = () => {
    if (!props.quest.completedAt) {
      completeQuest(props.quest.id);
    } else {
      uncompleteQuest(props.quest.id);
    }
  };

  return (
    <div class="group flex flex-row gap-1 items-baseline">
      <Show
        when={isEdit()}
        fallback={
          <div
            onClick={onClick}
            class={`truncate cursor-pointer ${
              props.quest.completedAt &&
              (props.showCompleted
                ? "line-through text-gray-300 cursor-default"
                : "invisible")
            }`}
            title={props.quest.name}
          >
            {props.quest.name || "unnamed"}
          </div>
        }
      >
        <form onSubmit={onEditEnd} class="w-full">
          <input
            class="w-full rounded-sm focus:outline-none"
            type="text"
            ref={inputRef}
            value={name()}
            onBlur={onEditEnd}
            onInput={(event) => setName(event?.currentTarget.value)}
          />
        </form>
      </Show>
      <Show when={!isEdit()}>
        <div
          onClick={onEdit}
          class={`hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer ${
            props.quest.completedAt && "invisible"
          }`}
        >
          Edit
        </div>
      </Show>
    </div>
  );
};

export default Quest;
