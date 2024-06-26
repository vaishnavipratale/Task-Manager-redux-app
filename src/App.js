import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
