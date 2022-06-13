export type Props = {
  name: string;
};

const Project = (props: Props) => {
  return (
    <div class="group flex flex-row gap-0.5 items-baseline">
      <div class="">{props.name}</div>
      <div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">
        Edit
      </div>
    </div>
  );
};

export default Project;
