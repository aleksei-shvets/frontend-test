/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/filterSlise';
import mock from '../mock/flights.json';

const Filter = () => {
  const [filterValues, setFilterValues] = useState({
    oneTransfer: false,
    withoutTransfer: false,
    minPrice: 0,
    maxPrice: 1000000,
    KL: false,
    AF: false,
    SU: false,
    TK: false,
    AY: false,
    BT: false,
    AZ: false,
    PC: false,
    SN: false,
    LO: false,
  });

  const [withoutTransfer, setWithoutTransfer] = useState([]);

  useEffect(() => {
    const allFlights = mock.result.flights;

    const withoutTransferFlights = allFlights.reduce((acc, item) => {
      const { legs } = item.flight;
      const [trip, refund] = legs;
      if (trip.segments.length > 1 || refund.segments.length > 1) {
        return acc;
      }
      const { airlineCode } = item.flight.carrier;
      if (!acc.includes(airlineCode)) {
        acc.push(airlineCode);
      }
      return acc;
    }, []);
    setWithoutTransfer(withoutTransferFlights);
  }, []);

  console.log(withoutTransfer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFilters(filterValues));
  }, [filterValues, dispatch]);

  const handleWithoutTransfer = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      withoutTransfer: e.target.checked,
    }));
  };

  const handleOneTransfer = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      oneTransfer: e.target.checked,
    }));
  };

  const handleMinPrice = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      minPrice: Number(e.target.value),
    }));
  };

  const handleMaxPrice = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      maxPrice: Number(e.target.value),
    }));
  };

  const handleKL = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      KL: e.target.checked,
    }));
  };

  const handleAF = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      AF: e.target.checked,
    }));
  };

  const handleSU = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      SU: e.target.checked,
    }));
  };

  const handleTK = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      TK: e.target.checked,
    }));
  };

  const handleAY = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      AY: e.target.checked,
    }));
  };

  const handleBT = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      BT: e.target.checked,
    }));
  };

  const handleAZ = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      AZ: e.target.checked,
    }));
  };

  const handlePC = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      PC: e.target.checked,
    }));
  };

  const handleSN = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      SN: e.target.checked,
    }));
  };

  const handleLO = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      LO: e.target.checked,
    }));
  };

  return (
    <section className="flex flex-col">
      <div className="sort-box">
        <h3 className="title">Фильтровать</h3>
        <fieldset>
          <div className="filter-item">
            <input
              type="checkbox"
              id="oneTransfer"
              name="oneTransfer"
              checked={filterValues.oneTransfer}
              onChange={handleOneTransfer}
            />
            <label htmlFor="oneTransfer"> - 1 пересадка</label>
          </div>

          <div className="filter-item">
            <input
              type="checkbox"
              id="withoutTransfer"
              name="withoutTransfer"
              checked={filterValues.withoutTransfer}
              onChange={handleWithoutTransfer}
            />
            <label htmlFor="withoutTransfer"> - без пересадок</label>
          </div>
        </fieldset>
      </div>

      <div className="sort-box">
        <h3 className="title">Цена</h3>
        <fieldset>
          <div className="flex filter-item__price">
            <label htmlFor="minPrice">От</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              value={filterValues.minPrice}
              onChange={handleMinPrice}
            />
          </div>

          <div className="flex filter-item__price">
            <label htmlFor="maxPrice">До</label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              value={filterValues.maxPrice}
              onChange={handleMaxPrice}
            />
          </div>
        </fieldset>
      </div>

      <div className="sort-box">
        <h3 className="title">Авиакомании</h3>
        <fieldset>
          <div className="filter-item">
            <input
              type="checkbox"
              id="KL"
              name="KL"
              checked={filterValues.KL}
              onChange={handleKL}
            />
            <label htmlFor="KL">KLM</label>
          </div>

          <div className="filter-item">
            <input
              type="checkbox"
              id="AF"
              name="AF"
              checked={filterValues.AF}
              onChange={handleAF}
            />
            <label htmlFor="AF">Air France</label>
          </div>

          <div className="filter-item">
            <input
              type="checkbox"
              id="SU"
              name="SU"
              checked={filterValues.SU}
              onChange={handleSU}
            />
            <label htmlFor="SU">Аэрофлот - российские авиалинии</label>
          </div>

          <div className="filter-item">
            <input
              type="checkbox"
              id="TK"
              name="TK"
              checked={filterValues.TK}
              onChange={handleTK}
            />
            <label htmlFor="TK">TURK HAVA YOLLARI A.O.</label>
          </div>

          <div className="filter-item">
            <input
              type="checkbox"
              id="AY"
              name="AY"
              checked={filterValues.AY}
              onChange={handleAY}
            />
            <label htmlFor="AY">Finnair Oyj</label>
          </div>

          <div className="filter-item">
            <input
              type="checkbox"
              id="BT"
              name="BT"
              checked={filterValues.BT}
              onChange={handleBT}
            />
            <label htmlFor="BT">Air Baltic Corporation A/S</label>
          </div>

          <div className="filter-item">
            <input
              type="checkbox"
              id="AZ"
              name="AZ"
              checked={filterValues.AZ}
              onChange={handleAZ}
            />
            <label htmlFor="AZ">Alitalia Societa Aerea Italiana</label>
          </div>

          <div className="filter-item">
            <input
              type="checkbox"
              id="PC"
              name="PC"
              checked={filterValues.PC}
              onChange={handlePC}
            />
            <label htmlFor="PC">Pegasus Hava Tasimaciligi A.S.</label>
          </div>

          <div className="filter-item">
            <input
              type="checkbox"
              id="SN"
              name="SN"
              checked={filterValues.SN}
              onChange={handleSN}
            />
            <label htmlFor="SN">Brussels Airlines</label>
          </div>

          <div className="filter-item">
            <input
              type="checkbox"
              id="LO"
              name="LO"
              checked={filterValues.LO}
              onChange={handleLO}
            />
            <label htmlFor="LO">LOT Polish Airlines</label>
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default Filter;
