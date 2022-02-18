/* eslint-disable react/jsx-no-bind */
import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import StatusDropdown from './StatusDropdown';
import { deleteTask, updateTask } from '../helpers';
import TaskContext from '../context/TaskContext';

function TaskLi({ task }) {
  const { tasksReload } = useContext(TaskContext);
  const [inputTaskContext, setInputTaskContext] = useState(task.context);
  const [inputLock, setInputLock] = useState(true);
  const inputRef = useRef(null);
  const { _id: id } = task;

  function handleChange({ target }) {
    const { value } = target;
    setInputTaskContext(value);
  }

  async function sendEditedTaskToBackEnd({ key }) {
    if (key === 'Enter') {
      setInputLock(true);
      await updateTask(id, { context: inputTaskContext });
      tasksReload();
    }
  }

  async function inputUnlock() {
    await setInputLock(false);
    inputRef.current.focus();
  }

  async function handleDelete() {
    await deleteTask(id);
    tasksReload();
  }

  return (
    <li>
      <input
        className="taskInput"
        ref={inputRef}
        type="text"
        value={inputTaskContext}
        disabled={inputLock}
        onKeyPress={sendEditedTaskToBackEnd}
        onChange={handleChange}
      />
      <StatusDropdown className="deleteButton" status={task.status} id={id} />
      <IconButton onClick={inputUnlock} aria-label="edit" size="large">
        <ModeEditOutlineOutlinedIcon />
      </IconButton>
      <IconButton className="editButton" onClick={handleDelete} aria-label="delete" size="large">
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

TaskLi.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    context: PropTypes.string,
    status: PropTypes.string,
  }),
}.isRequired;

export default TaskLi;
