const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAllTaks = async () => {
  const db = await connection();

  const response = await db.collection('tasks').find({}).toArray();

  return response;
};

const taskCreate = async (newTask) => {
  const db = await connection();

  const { insertedId } = await db.collection('tasks').insertOne({ ...newTask, createdDate: new Date() });

  return insertedId;
};

const taskFindById = async (id) => {
  const db = await connection();

  const task = await db.collection('tasks').findOne({ _id: ObjectId(id) });

  return task;
};

const taskUpdate = async (id, task) => {
  const db = await connection();

  await db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: task });
};

const taskDelete = async (id) => {
  const db = await connection();

  await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  getAllTaks,
  taskCreate,
  taskFindById,
  taskUpdate,
  taskDelete,
};
