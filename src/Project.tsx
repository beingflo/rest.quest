export type Props = {
  name: string;
};

const Project = (props: Props) => {
  return (
    <div class="group">
      <div>{props.name}</div>
      <div>Edit</div>
    </div>
  );
};

export default Project;
