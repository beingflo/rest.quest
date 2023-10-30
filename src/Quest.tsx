import { Component } from "solid-js";
import { useStore } from "./store";
import { Quest as QuestType } from "./types";

export type Props = {
  quest: QuestType;
  showCompleted?: boolean;
};

const Quest: Component<Props> = (props: Props) => {
  const [, { completeQuest }] = useStore();

  const onComplete = () => {
    completeQuest(props.quest.id);
  };

  return (
    <div class="group flex flex-row gap-1 items-baseline">
      <div
        onClick={onComplete}
        class={`truncate cursor-pointer ${
          props.quest.complete &&
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
