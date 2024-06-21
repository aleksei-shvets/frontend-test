export default (carrierList, flightsList) => {
  if (carrierList && Object.keys(carrierList).length > 0) {
    const carriers = Object.keys(carrierList)
      .filter((item) => carrierList[item]);
    if (carriers.length === 0) {
      return flightsList;
    }
    return flightsList
      .filter((item) => carriers.includes(item.flight.carrier.airlineCode));
  }
  return flightsList;
};
