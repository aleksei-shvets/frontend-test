const getDate = (strDate) => {
  const date = new Date(strDate);
  const options = { day: 'numeric', month: 'short', weekday: 'short' };
  const formattedDate = date.toLocaleDateString('ru-RU', options);
  return formattedDate;
};

export default getDate;
