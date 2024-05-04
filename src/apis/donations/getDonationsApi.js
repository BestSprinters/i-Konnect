import createQueryParams from '../../utils/createQueryParams';
import axiosInstance from '../axiosInstance';

// https://fandom-k-api.vercel.app/6-15/donations?cursor=142&pageSize=10&priorityIdolIds=21&priorityIdolIds=26&priorityIdolIds=27&priorityIdolIds=28&priorityIdolIds=29'
const getDonations = async (option = {}) => {
  const defaultOption = {
    cursor: '',
    pageSize: 10,
    priorityIdolIds: '',
  };
  const donationsOption = { ...defaultOption, ...option };
  const donationsParams = createQueryParams(donationsOption);
  try {
    const response = await axiosInstance.get(`/donations?${donationsParams}`);
    const donations = response.data.list;
    return donations;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getDonations;
