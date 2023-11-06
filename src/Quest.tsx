import { Component } from "solid-js";
import { useStore } from "./store";
import { Quest as QuestType } from "./types";

export type Props = {
  quest: QuestType;
  showCompleted?: boolean;
};

const Quest: Component<Props> = (props: Props) => {
  const [, { completeQuest, uncompleteQuest }] = useStore();

  const onClick = () => {
    if (!props.quest.completedAt) {
      completeQuest(props.quest.id);
    } else {
      uncompleteQuest(props.quest.id);
    }
  };

  return (
    <div class="group flex flex-row gap-1 items-baseline">
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
    </div>
  );
};

export default Quest;
