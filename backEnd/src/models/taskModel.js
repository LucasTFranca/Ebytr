const { ObjectId } = require("mongodb");
const connection = require("./connection");

const getAllTaks = async () => {
  const db = await connection();

  const response = await db.collection('tasks').find({}).toArray();

  return response;
};

const taskCreate = async (newTask) => {
  const db = await connection();

  const { insertedId } = await db.collection('tasks').insertOne(newTask);

  return insertedId;
};

const taskFindById = async (id) => {
  const db = await connection();

  const task = await db.collection('tasks').findOne({ _id: ObjectId(id) });

  return task;
};

const taskUpdate = async (id, task) => {
  const db = await connection();

  const response = await db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: task });

  console.log(response);
};

module.exports = {
  getAllTaks,
  taskCreate,
  taskFindById,
  taskUpdate,
};
