const Joi = require('joi');

const taskSchema = Joi.object({
  context: Joi.string().required(),
  status: Joi.string().required(),
});

module.exports = {
  taskSchema,
};