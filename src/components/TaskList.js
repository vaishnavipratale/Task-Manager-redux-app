import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { toggleTask, deleteTask } from '../actions/taskActions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onToggle={() => dispatch(toggleTask(task.id))}
          onDelete={() => dispatch(deleteTask(task.id))}
        />
      ))}
    </ul>
  );
};

export default TaskList;
