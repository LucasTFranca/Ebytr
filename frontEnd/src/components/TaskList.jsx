import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import StatusDropdown from './StatusDropdown';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <ul style={{ listStyleType: 'none' }}>
      { tasks.map((task) => (
        <li key={task.context}>
          { task.context }
          <StatusDropdown status={task.status} />
          <button type="button">-</button>
          <button type="button">x</button>
        </li>
      )) }
    </ul>
  );
}

export default TaskList;
