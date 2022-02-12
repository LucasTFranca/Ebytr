import { useState } from "react";

function StatusDropdown({ status } = '') {
  const [statusValue, setstatusValue] = useState(status);

  function handleChange({ target }) {
    const { value } = target;
    setstatusValue(value)
  }

  return (
    <select onChange={ handleChange } value={ statusValue }>
      <option value="pendente">pendente</option>
      <option value="andamento">em andamento</option>
      <option value="pronto">pronto</option>
    </select>
  );
}

export default StatusDropdown;
