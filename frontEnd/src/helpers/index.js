import axios from 'axios';

const getAllTaks = async () => {
  const { data } = await axios.get('http://localhost:4000/task');

  return data;
};

export default getAllTaks;
