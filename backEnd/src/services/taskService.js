const { StatusCodes } = require("http-status-codes");
const { getAllTaks, taskCreate, taskFindById } = require("../models/taskModel");
const { taskSchema } = require("../schemas");
const errorConstructor = require("../utils/functions/errorHandler");

const getTasksVerification = async () => {
  const tasks = await getAllTaks();

  return tasks;
};

const createTaskVerification = async (newTask) => {
  const { error } = taskSchema.validate(newTask);
  if (error) throw errorConstructor(StatusCodes.BAD_REQUEST, error.message);

  const taskId = await taskCreate(newTask);
  const task = await taskFindById(taskId);

  return task;
};
 
module.exports = {
  getTasksVerification,
  createTaskVerification,
};
