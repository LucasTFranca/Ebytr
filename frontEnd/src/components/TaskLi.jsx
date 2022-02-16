import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
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
      <StatusDropdown status={task.status} id={id} />
      <button className="editButton" onClick={inputUnlock} type="button">edit</button>
      <button className="deleteButton" onClick={handleDelete} type="button">x</button>
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
