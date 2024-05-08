import axiosInstance from '../axiosInstance';

const postVotes = async (id) => {
  try {
    const response = await axiosInstance.post(`/votes`, {
      idolId: `${id}`,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default postVotes;
