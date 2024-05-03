import createQueryParams from '../../utils/createQueryParams';
import axiosInstance from '../axiosInstance';

const getIdols = async (option = {}) => {
  const defaultOption = {
    cursor: '',
    pageSize: 10,
    keyword: '',
  };
  const idolsOption = { ...defaultOption, ...option };
  const idolsParams = createQueryParams(idolsOption);

  try {
    const response = await axiosInstance.get(`/idols?${idolsParams}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getIdols;
