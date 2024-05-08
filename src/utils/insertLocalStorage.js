// 사용하실떄 insertLocalStorage(key, value); 이렇게 사용하시면 됩니당
const insertLocalStorage = (localName, localValue) => {
  let dataArray = JSON.parse(localStorage.getItem(localName)) || [];
  dataArray.push(...localValue);
  dataArray = new Set(dataArray);
  dataArray = [...dataArray];
  localStorage.setItem(localName, JSON.stringify(dataArray));

  return dataArray;
};
export default insertLocalStorage;
