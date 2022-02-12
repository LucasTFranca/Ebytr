const express = require('express');
const { getTasks } = require('../controllers/taskController');

const taskRouter = express.Router();

taskRouter.get('/', getTasks)

module.exports = taskRouter;
