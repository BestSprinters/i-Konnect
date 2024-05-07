import createQueryParams from '../../utils/createQueryParams';
import axiosInstance from '../axiosInstance';

const getCharts = async (option = {}) => {
  const defaultOption = {
    gender: 'female',
    cursor: '',
    pageSize: 10,
  };
  const chartOption = { ...defaultOption, ...option };
  const chartsParams = createQueryParams(chartOption);

  try {
    const response = await axiosInstance.get(
      `/charts/{gender}?${chartsParams}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getCharts;
