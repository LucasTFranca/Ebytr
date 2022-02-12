const connection = require("./connection");

const getAllTaks = async () => {
  const db = await connection();

  const response = await db.collection('tasks').find({}).toArray();

  return response;
};

module.exports = {
  getAllTaks,
};
