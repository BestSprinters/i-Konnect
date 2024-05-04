import createQueryParams from '../../utils/createQueryParams';
import axiosInstance from '../axiosInstance';

// priorityIdolIds 옵션 쓰실때 2개 이상이면,
// priorityIdolIds: [21, 26, 27] <= 이런식으로 불러올 컴포넌트에서 **배열**로 만들어 주셔야 합니다.(하나만 불러올시에는 pageSize처럼 쓰시면 됩니다.)
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
