import axiosInstance from '../axiosInstance';

const postDonationsApi = async (requestData) => {
  try {
    await axiosInstance.post(`/donations`, requestData);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default postDonationsApi;
