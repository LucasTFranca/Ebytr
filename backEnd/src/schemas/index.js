const Joi = require('joi');

const taskSchema = Joi.object({
  context: Joi.string().required(),
  status: Joi.string().required(),
});

const updateTaskSchema = Joi.object({
  context: Joi.string(),
  status: Joi.string(),
}).or('context', 'status');

module.exports = {
  taskSchema,
  updateTaskSchema,
};