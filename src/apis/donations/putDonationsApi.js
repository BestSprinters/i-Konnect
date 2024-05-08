import axiosInstance from '../axiosInstance';

// 후원하는api 업데이트 아님
const putDonations = async (id, amount) => {
  try {
    await axiosInstance.put(`/donations/${id}/contribute`, {
      amount: `${amount}`,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default putDonations;
