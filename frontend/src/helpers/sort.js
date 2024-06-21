const calculateTotalDuration = (flight) => flight
  .legs.reduce((totalDuration, leg) => totalDuration + leg.duration, 0);

export default (list, sortType) => {
  if (sortType === 'priceUp') {
    return list
      .toSorted((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);
  }
  if (sortType === 'priceDown') {
    return list
      .toSorted((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);
  }
  return list.toSorted((a, b) => (
    calculateTotalDuration(a.flight) - calculateTotalDuration(b.flight)
  ));
};
