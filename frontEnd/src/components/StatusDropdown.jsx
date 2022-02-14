import React, { useState } from 'react';
import PropTypes from 'prop-types';

function StatusDropdown({ status } = '') {
  const [statusValue, setstatusValue] = useState(status);

  async function handleChange({ target }) {
    const { value } = target;
    setstatusValue(value);
  }

  return (
    <select onChange={handleChange} value={statusValue}>
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
