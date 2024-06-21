export default (flight) => {
  console.log(flight);
  if (flight && Array.isArray(flight)) {
    return flight.segments
      .reduce((totalDuration, leg) => totalDuration + leg.travelDuration, 0);
  }
  return 0;
};
