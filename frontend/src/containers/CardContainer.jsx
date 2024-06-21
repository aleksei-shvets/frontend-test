import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Card from '../components/FlyCard.jsx';
import { getSortType, getFilters } from '../store/filterSlise.js';
import genTicketParams from '../helpers/genTicketParams.js';
import sort from '../helpers/sort.js';
import priceFilter from '../helpers/priceFilter.js';
import carrierFilter from '../helpers/carrierFilter.js';
import transferFilter from '../helpers/transferFilter.js';
import mock from '../mock/flights.json';

const CardContaiiner = () => {
  const sortType = useSelector(getSortType);
  const filters = useSelector(getFilters);

  const allFlights = mock.result.flights;

  const [sortedFlights, setSortedFlights] = useState(allFlights);
  const [ping, setPing] = useState(10);

  const renderCards = (flights) => flights.slice(0, ping).map((item) => {
    const params = genTicketParams(item);
    return (
      <li key={item.flightToken}>
        <Card params={params} />
      </li>
    );
  });

  useEffect(() => {
    const {
      minPrice,
      maxPrice,
      carriers,
      oneTransfer,
      withoutTransfer,
    } = filters;

    const filteredPrice = priceFilter(minPrice, maxPrice, allFlights);
    const filteredCarriers = carrierFilter(carriers, filteredPrice);
    const filteredTransfer = transferFilter(oneTransfer, withoutTransfer, filteredCarriers);

    if (sortType) {
      setSortedFlights(sort(filteredTransfer, sortType));
    } else {
      setSortedFlights(filteredTransfer);
    }
  }, [sortType, filters]);

  const handlePing = () => {
    setPing((prevValues) => prevValues + 10);
  };

  return (
    <>
      <div className="cadrs-container">
        <ul>
          {renderCards(sortedFlights)}
        </ul>
      </div>
      <div className="cadrs-container-footer flex flex-row">
        <button onClick={handlePing} type="button">Показать еще</button>
      </div>
    </>
  );
};

export default CardContaiiner;
