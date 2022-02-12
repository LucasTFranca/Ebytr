const { StatusCodes } = require('http-status-codes');
const { getTasksVerification } = require('../services/taskService');

const getTasks = async (_req, res, next) => {
  try {
    const tasks = await getTasksVerification();

    return res.status(StatusCodes.OK).json(tasks);
  } catch (error) {
    console.log(`TASK GET ${error.message}`);
    return next(error)
  }
};

module.exports = {
  getTasks,
};
