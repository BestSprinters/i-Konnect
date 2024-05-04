import createQueryParams from '../../utils/createQueryParams';
import axiosInstance from '../axiosInstance';

const getDonations = async (option = {}) => {
  const defaultOption = {
    cursor: '',
    pageSize: 10,
  };
  const donationsOption = { ...defaultOption, ...option };
  const donationsParams = createQueryParams(donationsOption);

  try {
    const response = await axiosInstance.get(`/donations?${donationsParams}`);
    const donations = response.data;
    return donations;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getDonations;
