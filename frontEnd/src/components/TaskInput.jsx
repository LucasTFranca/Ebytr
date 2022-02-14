import React, { useState } from 'react';

function TaskInput() {
  const [TaskInputValue, setTaskInputValue] = useState('');

  function handleChange({ target }) {
    const { value } = target;
    setTaskInputValue(value);
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={TaskInputValue}
      />
      <button type="button">add Task</button>
    </div>
  );
}

export default TaskInput;
