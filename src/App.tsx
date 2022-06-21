import { Component } from 'solid-js';
import Projects from './Projects';
import { StoreProvider } from './store';
import Tasks from './Tasks';

const App: Component = () => {
  return (
    <StoreProvider>
      <div class="flex flex-row">
        <Projects />
        <Tasks />
      </div>
    </StoreProvider>
  );
};

export default App;
