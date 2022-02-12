const { StatusCodes } = require('http-status-codes');
const {
  getTasksVerification,
  createTaskVerification,
} = require('../services/taskService');

const getTasks = async (_req, res, next) => {
  try {
    const tasks = await getTasksVerification();

    return res.status(StatusCodes.OK).json(tasks);
  } catch (error) {
    console.log(`TASK GET ${error.message}`);
    return next(error)
  }
};

const createTask = async (req, res, next) => {
  try {
    const newTask = req.body;
    const task = await createTaskVerification(newTask);

    return res.status(StatusCodes.CREATED).json(task);
  } catch (error) {
    console.log(`TASK POST ${error.message}`);
    return next(error)
  }
};

module.exports = {
  getTasks,
  createTask,
};
