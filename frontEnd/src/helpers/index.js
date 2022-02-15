import axios from 'axios';

const baseUrl = 'http://localhost:4000';

const getAllTaks = async () => {
  const { data } = await axios.get(`${baseUrl}/task`);

  return data;
};

const updateTask = async (id, data) => {
  await axios.put(`${baseUrl}/task/${id}`, data);
};

const deleteTask = async (id) => {
  await axios.delete(`${baseUrl}/task/${id}`);
};

const createTask = async (data) => {
  await axios.post(`${baseUrl}/task/`, data);
};

export {
  getAllTaks,
  updateTask,
  deleteTask,
  createTask,
};
