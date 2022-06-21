import { Component } from 'solid-js';
import Projects from './Projects';
import { StoreProvider } from './store';
import Quests from './Quests';

const App: Component = () => {
  return (
    <StoreProvider>
      <div class="flex flex-row">
        <Projects />
        <Quests />
      </div>
    </StoreProvider>
  );
};

export default App;
