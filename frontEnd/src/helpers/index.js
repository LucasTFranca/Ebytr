import axios from 'axios';

const getAllTaks = async () => {
  const { data } = await axios.get('http://localhost:4000/task');

  return data;
};

const updateTask = async (id, data) => {
  await axios.put(`http://localhost:4000/task/${id}`, data);
};

const deleteTask = async (id) => {
  await axios.delete(`http://localhost:4000/task/${id}`);
};

export {
  getAllTaks,
  updateTask,
  deleteTask,
};
