import getDate from './getDate.js';
import getTime from './getTime.js';

export default (item) => {
  const tripParams = {
    fromAirport: null,
    fromCity: null,
    fromAirportCode: null,
    toAirport: null,
    toCity: null,
    toAirportCode: null,
    dateFrom: null,
    timeFrom: null,
    dateTo: null,
    timeTo: null,
    duration: null,
    isTransfer: null,
    carrier: null,
    airlineCode: null,
    totalPrice: null,
  };

  const refundParams = {
    fromAirport: null,
    fromCity: null,
    fromAirportCode: null,
    toAirport: null,
    toCity: null,
    toAirportCode: null,
    dateFrom: null,
    timeFrom: null,
    dateTo: null,
    timeTo: null,
    duration: null,
    isTransfer: null,
  };
  const { caption, airlineCode } = item.flight.carrier;
  const { amount } = item.flight.price.total;
  const [trip, refund] = item.flight.legs;
  if (trip.segments.length === 1) {
    const [tripData] = trip.segments;
    tripParams.totalPrice = amount;
    tripParams.carrier = caption;
    tripParams.airlineCode = airlineCode;
    tripParams.fromAirport = tripData.departureAirport.caption;
    tripParams.fromAirportCode = tripData.departureAirport.uid;
    tripParams.toAirport = tripData.arrivalAirport.caption;
    tripParams.toAirportCode = tripData.arrivalAirport.uid;
    tripParams.fromCity = tripData.departureCity.caption;
    tripParams.toCity = tripData.arrivalCity.caption;
    tripParams.dateFrom = getDate(tripData.departureDate);
    tripParams.timeFrom = getTime(tripData.departureDate);
    tripParams.dateTo = getDate(tripData.arrivalDate);
    tripParams.timeTo = getTime(tripData.arrivalDate);
    tripParams.isTransfer = false;
    tripParams.totalDuration = trip.duration;
  } else {
    const [tripData, transferData] = trip.segments;
    tripParams.totalPrice = amount;
    tripParams.carrier = caption;
    tripParams.airlineCode = airlineCode;
    tripParams.fromAirport = tripData.departureAirport.caption;
    tripParams.fromAirportCode = tripData.departureAirport.uid;
    tripParams.toAirport = transferData.arrivalAirport.caption;
    tripParams.toAirportCode = transferData.arrivalAirport.uid;
    tripParams.fromCity = tripData.departureCity.caption;
    tripParams.toCity = transferData?.arrivalCity?.caption;
    tripParams.dateFrom = getDate(tripData.departureDate);
    tripParams.timeFrom = getTime(tripData.departureDate);
    tripParams.dateTo = getDate(transferData.arrivalDate);
    tripParams.timeTo = getTime(transferData.arrivalDate);
    tripParams.isTransfer = true;
    tripParams.totalDuration = trip.duration;
  }

  if (refund.segments.length === 1) {
    tripParams.totalPrice = amount;
    tripParams.carrier = caption;
    tripParams.airlineCode = airlineCode;
    const [refundData] = refund.segments;
    refundParams.fromAirport = refundData.departureAirport.caption;
    refundParams.fromAirportCode = refundData.departureAirport.uid;
    refundParams.toAirport = refundData.arrivalAirport.caption;
    refundParams.toAirportCode = refundData.arrivalAirport.uid;
    refundParams.fromCity = refundData.departureCity.caption;
    refundParams.toCity = refundData.arrivalCity.caption;
    refundParams.dateFrom = getDate(refundData.departureDate);
    refundParams.timeFrom = getTime(refundData.departureDate);
    refundParams.dateTo = getDate(refundData.arrivalDate);
    refundParams.timeTo = getTime(refundData.arrivalDate);
    refundParams.isTransfer = false;
    refundParams.totalDuration = refund.duration;
  } else {
    const [refundData, refundTransferData] = refund.segments;
    tripParams.totalPrice = amount;
    tripParams.carrier = caption;
    tripParams.airlineCode = airlineCode;
    refundParams.fromAirport = refundData.departureAirport.caption;
    refundParams.fromAirportCode = refundData.departureAirport.uid;
    refundParams.toAirport = refundTransferData.arrivalAirport.caption;
    refundParams.toAirportCode = refundTransferData.arrivalAirport.uid;
    refundParams.fromCity = refundData.departureCity?.caption;
    refundParams.toCity = refundTransferData.arrivalCity.caption;
    refundParams.dateFrom = getDate(refundData.departureDate);
    refundParams.timeFrom = getTime(refundData.departureDate);
    refundParams.dateTo = getDate(refundTransferData.arrivalDate);
    refundParams.timeTo = getTime(refundTransferData.arrivalDate);
    refundParams.isTransfer = true;
    refundParams.totalDuration = refund.duration;
  }

  return {
    tripParams,
    refundParams,
  };
};
