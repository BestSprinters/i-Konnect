import createQueryParams from '../../utils/createQueryParams';
import axiosInstance from '../axiosInstance';

const getIdols = async (cursor = null) => {
  const idolsObj = {
    cursor: `${cursor}`,
  };
  const idolsParams = cursor ? createQueryParams(idolsObj) : '';

  try {
    const response = await axiosInstance.get(`/idols?${idolsParams}`);
    const idols = response.data.list;
    return idols;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getIdols;
