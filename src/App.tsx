import { Component, createSignal } from 'solid-js';
import Projects from './Projects';
import { StoreProvider } from './store';
import Tasks from './Tasks';

const App: Component = () => {
  const [projects, setProjects] = createSignal([]);

  document.addEventListener('keydown', (event) => {
    const target = event.target as HTMLElement;

    if (event.key === 'l' && target.tagName.toLowerCase() !== 'input') {
      setProjects([...projects(), 'new item']);
    }
  });

  let i = 0;
  while (i < 20) {
    setProjects([...projects(), 'test' + i]);
    i += 1;
  }

  return (
    <StoreProvider>
      <div class="flex flex-row">
        <Projects projects={projects()} />
        <Tasks />
      </div>
    </StoreProvider>
  );
};

export default App;
