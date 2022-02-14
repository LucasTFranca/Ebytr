import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaskContext';
import getAllTaks from '../helpers';

const INITIAL_STATE = [];

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(INITIAL_STATE);

  useEffect(() => {
    async function taskRequisition() {
      const data = await getAllTaks();
      setTasks(data);
    }

    taskRequisition();
  }, []);

  async function updateTasks() {
    const data = await getAllTaks();
    setTasks(data);
  }

  const state = useMemo(() => ({ tasks, updateTasks }), [tasks]);

  return (
    <TaskContext.Provider value={state}>
      { children }
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default TaskProvider;
