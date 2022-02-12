const { StatusCodes } = require("http-status-codes");
const { getAllTaks, taskCreate, taskFindById, taskUpdate } = require("../models/taskModel");
const { taskSchema } = require("../schemas");
const { taskNotFound } = require("../utils/dictionary/errorMessages");
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

const updateTaskVerification = async (taskId, taskToUpdate) => {
  const { error } = taskSchema.validate(taskToUpdate);
  if (error) throw errorConstructor(StatusCodes.BAD_REQUEST, error.message);

  const taskToVirify = await taskFindById(taskId);
  if(!taskToVirify) throw errorConstructor(StatusCodes.NOT_FOUND, taskNotFound);

  await taskUpdate(taskId, taskToUpdate);

  const task = await taskFindById(taskId);

  return task;
};
 
module.exports = {
  getTasksVerification,
  createTaskVerification,
  updateTaskVerification,
};
