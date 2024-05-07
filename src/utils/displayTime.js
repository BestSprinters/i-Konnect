const displayTime = (create, deadline) => {
  const createDay = new Date(create);
  const deadlineDay = new Date(deadline);

  const milliSeconds = deadlineDay - createDay;

  const seconds = milliSeconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30;
  const years = months / 12;

  if (minutes < 60) {
    return `${Math.floor(minutes)}분 남음`;
  }
  if (hours < 24) {
    return `${Math.floor(hours)}시간 남음`;
  }
  if (days < 30) {
    return `${Math.floor(days)}일 남음`;
  }
  if (months < 12) {
    return `${Math.floor(months)}달 남음`;
  }
  return `${Math.floor(years)}년 남음`;
};

export default displayTime;
