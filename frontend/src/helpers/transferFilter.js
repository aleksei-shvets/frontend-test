export default (oneTransfer, withoutTransfer, flightsList) => {
  if (oneTransfer && !withoutTransfer) {
    return flightsList.filter((item) => {
      const { legs } = item.flight;
      const [trip, refund] = legs;
      if (trip.segments.length === 1 || refund.segments.length === 1) {
        return false;
      }
      return true;
    });
  }
  if (withoutTransfer && !oneTransfer) {
    return flightsList.filter((item) => {
      const { legs } = item.flight;
      const [trip, refund] = legs;
      if (trip.segments.length > 1 || refund.segments.length > 1) {
        return false;
      }
      return true;
    });
  }
  return flightsList;
};
