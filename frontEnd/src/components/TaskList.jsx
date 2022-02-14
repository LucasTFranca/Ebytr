import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import TaskLi from './TaskLi';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <ul style={{ listStyleType: 'none' }}>
      { tasks.map((task) => <TaskLi key={task.context} task={task} />) }
    </ul>
  );
}

export default TaskList;
