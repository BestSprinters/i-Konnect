import axios from 'axios';

const teamName = '06-15';

const axiosConfig = {
  baseURL: `https://fandom-k-api.vercel.app/${teamName}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  },
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
