const { StatusCodes } = require('http-status-codes');
const {
  getAllTaks, taskCreate, taskFindById, taskUpdate, taskDelete,
} = require('../models/taskModel');
const { taskSchema, updateTaskSchema } = require('../schemas');
const { taskNotFound, idUndefined } = require('../utils/dictionary/errorMessages');
const errorConstructor = require('../utils/functions/errorHandler');

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

const updateTaskVerification = async (taskId, taskToUpdate) => {
  const { error } = updateTaskSchema.validate(taskToUpdate);
  if (error) throw errorConstructor(StatusCodes.BAD_REQUEST, error.message);

  if (!taskId) throw errorConstructor(StatusCodes.BAD_REQUEST, idUndefined);

  const taskToVirify = await taskFindById(taskId);
  if (!taskToVirify) throw errorConstructor(StatusCodes.NOT_FOUND, taskNotFound);

  await taskUpdate(taskId, taskToUpdate);

  const task = await taskFindById(taskId);

  return task;
};

const deleteTaskVerification = async (taskId) => {
  if (!taskId) throw errorConstructor(StatusCodes.BAD_REQUEST, idUndefined);

  const task = await taskFindById(taskId);
  if (!task) throw errorConstructor(StatusCodes.NOT_FOUND, taskNotFound);

  await taskDelete(taskId);

  return task;
};

module.exports = {
  getTasksVerification,
  createTaskVerification,
  updateTaskVerification,
  deleteTaskVerification,
};
