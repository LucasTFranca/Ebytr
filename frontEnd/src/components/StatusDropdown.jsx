import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TaskContext from '../context/TaskContext';
import { updateTask } from '../helpers';

function StatusDropdown({ status, id }) {
  const { tasksReload } = useContext(TaskContext);

  async function handleChange({ target }) {
    const { value } = target;
    await updateTask(id, { status: value });

    tasksReload();
  }

  return (
    <select className="statusSelect" onChange={handleChange} value={status}>
      <option value="pendente">pendente</option>
      <option value="andamento">em andamento</option>
      <option value="pronto">pronto</option>
    </select>
  );
}

StatusDropdown.propTypes = {
  status: PropTypes.string,
}.required;

export default StatusDropdown;
