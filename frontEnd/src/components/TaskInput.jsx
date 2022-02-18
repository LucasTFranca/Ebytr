/* eslint-disable react/jsx-no-bind */
import React, { useContext, useState } from 'react';
import { Button } from '@mui/material/';
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
    setTaskInputValue('');
    tasksReload();
  }

  function verifyToSend({ key }) {
    if (key === 'Enter') sendTaskToCreate();
  }

  return (
    <div className="container">
      <SortDropdown />
      <input
        id="taskCreateInput"
        type="text"
        onChange={handleChange}
        value={taskInputValue}
        onKeyPress={verifyToSend}
      />
      <Button
        sx={{
          fontSize: '13px',
          textTransform: 'none',
          padding: '0',
          marginTop: '0px',
          marginLeft: '0px',
          height: '42px',
          borderLeft: '0px',
          borderTopLeftRadius: '0px',
          borderBottomLeftRadius: '0px',
          width: '10vh',
        }}
        id="addTaskButton"
        onClick={sendTaskToCreate}
        variant="contained"
        size="large"
      >
        add Task
      </Button>
    </div>
  );
}

export default TaskInput;
