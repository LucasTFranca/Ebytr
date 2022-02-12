import { useState } from "react";

function TaskInput() {
  function handleChange({ target }) {
    const { value } = target;
    setTaskInputValue(value)
  }

  const [TaskInputValue, setTaskInputValue] = useState('');
  return (
    <div>
      <input
        type="text"
        onChange={ handleChange }
        value={ TaskInputValue }
      />
      <button>add Task</button>
    </div>
  );
};

export default TaskInput;
