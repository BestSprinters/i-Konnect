import axiosInstance from '../axiosInstance';

// id는 getDonations 기준으로 받은 값을 넣어야하고 amount는 얼마만큼 조공 할지입니다.
const putDonations = async (id, amount) => {
  try {
    const response = await axiosInstance.put(`/donations/${id}/contribute`, {
      amount: `${amount}`,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default putDonations;
