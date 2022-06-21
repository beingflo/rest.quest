import { Component } from 'solid-js';
import ProjectsList from './ProjectsList';
import { StoreProvider } from './store';
import QuestsView from './QuestsView';

const App: Component = () => {
  return (
    <StoreProvider>
      <div class="flex flex-row">
        <ProjectsList />
        <QuestsView />
      </div>
    </StoreProvider>
  );
};

export default App;
