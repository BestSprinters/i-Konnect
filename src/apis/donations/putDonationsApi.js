import axiosInstance from '../axiosInstance';

const putDonations = async (id, amount) => {
  try {
    await axiosInstance.put(`/donations/${id}`, {
      deadline: '2025-10-10T00:00:00.000Z',
      targetDonation: `${amount}`,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default putDonations;
