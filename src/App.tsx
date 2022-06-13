import { Component, createSignal } from 'solid-js';
import Projects from './Projects';
import Tasks from './Tasks';

const App: Component = () => {
  const [projects, setProjects] = createSignal([]);

  let i = 0;
  while (i < 20) {
    setProjects([...projects(), 'test' + i]);
    i += 1;
  }

  return (
    <div class="flex flex-row">
      <Projects projects={projects()} />
      <Tasks />
    </div>
  );
};

export default App;
