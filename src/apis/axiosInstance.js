import axios from 'axios';

const teamName = '6-15';

const axiosConfig = {
  baseURL: `https://fandom-k-api.vercel.app/${teamName}`,
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
