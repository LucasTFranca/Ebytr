import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaskContext';
import { getAllTaks } from '../helpers';

const INITIAL_STATE = [];

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(INITIAL_STATE);
  const [sortMethod, setSortMethod] = useState('alfabetica');

  function sortApplier(data) {
    function handleSort(a, b, key) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    }

    const objectValidatorWhatSortToUse = {
      alfabetica: () => {
        data.sort((a, b) => handleSort(a, b, 'context'));
      },
      criacao: () => {
        data.sort((a, b) => handleSort(a, b, 'createdDate'));
      },
      status: () => {
        data.sort((a, b) => handleSort(a, b, 'status'));
      },
    };

    objectValidatorWhatSortToUse[sortMethod]();
  }

  useEffect(() => {
    async function taskRequisition() {
      const data = await getAllTaks();
      sortApplier(data);
      setTasks(data);
    }

    taskRequisition();
  }, []);

  async function tasksReload() {
    const data = await getAllTaks();
    sortApplier(data);
    setTasks(data);
  }

  useEffect(() => {
    if (tasks.length >= 1) tasksReload();
  }, [sortMethod]);

  const state = useMemo(() => ({ tasks, tasksReload, setSortMethod }), [tasks]);

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
