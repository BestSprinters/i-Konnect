import axiosInstance from '../axiosInstance';

const getDonations = async () => {
  try {
    const response = await axiosInstance.get(`/donations`);
    const donations = response.data;
    return donations;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getDonations;
