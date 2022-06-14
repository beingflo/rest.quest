import { useStore } from './store';

const Tasks = () => {
  const [state, { add }] = useStore();

  return <div class="w-5/6 h-screen">Tasks</div>;
};

export default Tasks;
