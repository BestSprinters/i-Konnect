import createQueryParams from '../../utils/createQueryParams';
import axiosInstance from '../axiosInstance';

const getCharts = async (gender = 'female') => {
  const chartsObj = {
    gender: `${gender}`,
  };
  const chartsParams = createQueryParams(chartsObj);

  try {
    const response = await axiosInstance.get(
      `/charts/{gender}?${chartsParams}`,
    );
    const charts = response.data;
    return charts;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getCharts;
