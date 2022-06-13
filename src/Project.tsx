export type Props = {
  name: string;
};

const Project = (props: Props) => {
  return <div class="">{props.name}</div>;
};

export default Project;
