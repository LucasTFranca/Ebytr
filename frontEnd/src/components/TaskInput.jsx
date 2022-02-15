import React, { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';
import { createTask } from '../helpers';
import SortDropdown from './SortDropdown';

function TaskInput() {
  const [taskInputValue, setTaskInputValue] = useState('');
  const { tasksReload } = useContext(TaskContext);

  function handleChange({ target }) {
    const { value } = target;
    setTaskInputValue(value);
  }

  async function sendTaskToCreate() {
    await createTask({ context: taskInputValue, status: 'pendente' });
    tasksReload();
  }

  function verifyToSend({ key }) {
    if (key === 'Enter') sendTaskToCreate();
  }

  return (
    <div>
      <SortDropdown />
      <input
        type="text"
        onChange={handleChange}
        value={taskInputValue}
        onKeyPress={verifyToSend}
      />
      <button
        onClick={sendTaskToCreate}
        type="button"
      >
        add Task
      </button>
    </div>
  );
}

export default TaskInput;
