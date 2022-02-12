const express = require('express');

const taskRouter = express.Router();

taskRouter.get('/', (_req, res) => res.status(200).json({}))

module.exports = taskRouter;
