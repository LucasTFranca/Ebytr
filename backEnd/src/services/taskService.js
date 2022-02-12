const { getAllTaks } = require("../models/taskModel");

const getTasksVerification = async () => {
  const tasks = await getAllTaks();

  return tasks;
};

module.exports = {
  getTasksVerification,
};
