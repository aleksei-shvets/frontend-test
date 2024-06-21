export default (min, max, flightList) => {
  if (min && max) {
    return flightList.filter((item) => {
      const price = parseFloat(item.flight.price.total.amount);
      return price >= Number(min) && price <= Number(max);
    });
  }
  if (min) {
    return flightList.filter((item) => parseFloat(item.flight.price.total.amount) >= Number(min));
  }
  if (max) {
    return flightList.filter((item) => parseFloat(item.flight.price.total.amount) <= Number(max));
  }
  return flightList;
};
