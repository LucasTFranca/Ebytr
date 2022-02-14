import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import TaskProvider from './context/TaskProvider';

function App() {
  return (
    <TaskProvider>
      <Switch>
        <Route exat path="/" component={Home} />
      </Switch>
    </TaskProvider>
  );
}

export default App;
