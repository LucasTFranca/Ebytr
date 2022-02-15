import React, { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';

function SortDropdown() {
  const [sortValue, setSortValue] = useState();
  const { setSortMethod } = useContext(TaskContext);

  function handleChange({ target }) {
    const { value } = target;
    setSortValue(value);
    setSortMethod(value);
  }

  return (
    <select value={sortValue} onChange={handleChange}>
      <option value="alfabetica">alfabética</option>
      <option value="criacao">data de criação</option>
      <option value="status">status</option>
    </select>
  );
}

export default SortDropdown;
