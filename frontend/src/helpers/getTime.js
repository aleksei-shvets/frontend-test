/* eslint-disable no-unused-vars */
const getTime = (timeStr) => {
  const [, time] = timeStr.trim().split('T');
  const [hours, minutes, ...rest] = time;
  return `${hours}:${minutes}`;
};

export default getTime;
