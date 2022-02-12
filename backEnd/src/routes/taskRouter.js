const express = require('express');
const { getTasks, createTask, updateTask } = require('../controllers/taskController');

const taskRouter = express.Router();

taskRouter.get('/', getTasks);

taskRouter.post('/', createTask);

taskRouter.put('/:id', updateTask);

module.exports = taskRouter;
