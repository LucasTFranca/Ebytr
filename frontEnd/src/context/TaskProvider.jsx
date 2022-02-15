import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaskContext';
import { getAllTaks } from '../helpers';

const INITIAL_STATE = [];

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(INITIAL_STATE);
  const [sortMethod, setSortMethod] = useState('alfabetica');

  function sortApplier(data) {
    const objectValidatorWhatSortToUse = {
      alfabetica: () => {
        data.sort((a, b) => {
          if (a.context < b.context) return -1;
          if (a.context > b.context) return 1;
          return 0;
        });
      },
      criacao: () => {

      },
      status: () => {
        data.sort((a, b) => {
          if (a.status < b.status) return -1;
          if (a.status > b.status) return 1;
          return 0;
        });
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
