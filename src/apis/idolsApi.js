import axiosInstance from './axiosInstance';

// 인자 세개이상이면 객체 만들어서 전달
// URLparams 쓰기
// 쿼리 유틸함수 만들어서 키밸류 자동화시킴
const getProducts = async () => {
  try {
    const response = await axiosInstance.get();
    // const { responseURL } = response.request;
    // console.log(responseURL);
    const products = response;
    console.log(products);
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getProducts;
