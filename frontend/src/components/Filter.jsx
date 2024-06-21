/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/filterSlise';
import carrierFilter from '../helpers/carrierFilter.js';
import mock from '../mock/flights.json';

const Filter = () => {
  const allFlights = mock.result.flights;
  const [minPrices, setMinPrices] = useState('');
  const [filterValues, setFilterValues] = useState({
    oneTransfer: false,
    withoutTransfer: false,
    minPrice: '',
    maxPrice: '',
    carriers: {
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
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilters(filterValues));
  }, [filterValues, dispatch]);

  useEffect(() => {
    const minPricesData = {};

    const carrierList = ['KL', 'AF', 'SU', 'TK', 'AY', 'BT', 'AZ', 'PC', 'SN', 'LO'];

    carrierList.forEach((item) => {
      const filteredItems = carrierFilter({ [item]: true }, allFlights)
        .toSorted((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);
      minPricesData[item] = filteredItems[0].flight.price.total.amount;
      setMinPrices(minPricesData);
    });
  }, []);

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
    const { value } = e.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      minPrice: value === '' ? '' : Math.abs(Number(value)),
    }));
  };

  const handleMaxPrice = (e) => {
    const { value } = e.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      maxPrice: value === '' ? '' : Math.abs(Number(value)),
    }));
  };

  const handleKL = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      carriers: {
        ...prevValues.carriers,
        KL: e.target.checked,
      },
    }));
  };

  const handleAF = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      carriers: {
        ...prevValues.carriers,
        AF: e.target.checked,
      },
    }));
  };

  const handleSU = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      carriers: {
        ...prevValues.carriers,
        SU: e.target.checked,
      },
    }));
  };

  const handleTK = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      carriers: {
        ...prevValues.carriers,
        TK: e.target.checked,
      },
    }));
  };

  const handleAY = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      carriers: {
        ...prevValues.carriers,
        AY: e.target.checked,
      },
    }));
  };

  const handleBT = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      carriers: {
        ...prevValues.carriers,
        BT: e.target.checked,
      },
    }));
  };

  const handleAZ = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      carriers: {
        ...prevValues.carriers,
        AZ: e.target.checked,
      },
    }));
  };

  const handlePC = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      carriers: {
        ...prevValues.carriers,
        PC: e.target.checked,
      },
    }));
  };

  const handleSN = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      carriers: {
        ...prevValues.carriers,
        SN: e.target.checked,
      },
    }));
  };

  const handleLO = (e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      carriers: {
        ...prevValues.carriers,
        LO: e.target.checked,
      },
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
              placeholder="0"
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
              placeholder="1000000"
            />
          </div>
        </fieldset>
      </div>

      <div className="sort-box">
        <h3 className="title">Авиакомании</h3>
        <fieldset>
          <div className="mb-5 carrier-item flex flex-row">
            <div className="carrier-item-label">
              <input
                type="checkbox"
                id="KL"
                name="KL"
                checked={filterValues.KL}
                onChange={handleKL}
              />
              <label className="carrier-item-label" htmlFor="KL">KLM</label>
            </div>
            <span>{`от ${minPrices.KL} р.`}</span>
          </div>

          <div className="mb-5 carrier-item flex flex-row">
            <div className="carrier-item-label">
              <input
                type="checkbox"
                id="AF"
                name="AF"
                checked={filterValues.AF}
                onChange={handleAF}
              />
              <label className="carrier-item-label" htmlFor="AF">Air France</label>
            </div>
            <span>{`от ${minPrices.AF} р.`}</span>
          </div>

          <div className="mb-5 carrier-item flex flex-row">
            <div className="carrier-item-label">
              <input
                type="checkbox"
                id="SU"
                name="SU"
                checked={filterValues.SU}
                onChange={handleSU}
              />
              <label htmlFor="SU">Аэрофлот - российские авиалинии</label>
            </div>
            <span>{`от ${minPrices.SU} р.`}</span>
          </div>

          <div className="mb-5 carrier-item flex flex-row">
            <div className="carrier-item-label">
              <input
                type="checkbox"
                id="TK"
                name="TK"
                checked={filterValues.TK}
                onChange={handleTK}
              />
              <label className="carrier-item-label" htmlFor="TK">TURK HAVA YOLLARI A.O.</label>
            </div>
            <span>{`от ${minPrices.TK} р.`}</span>
          </div>

          <div className=" mb-5carrier-item flex flex-row">
            <div className="carrier-item-label">
              <input
                type="checkbox"
                id="AY"
                name="AY"
                checked={filterValues.AY}
                onChange={handleAY}
              />
              <label className="carrier-item-label" htmlFor="AY">Finnair Oyj</label>
            </div>
            <span>{`от ${minPrices.AY} р.`}</span>
          </div>

          <div className="mb-5 carrier-item flex flex-row">
            <div className="carrier-item-label">
              <input
                type="checkbox"
                id="BT"
                name="BT"
                checked={filterValues.BT}
                onChange={handleBT}
              />
              <label className="carrier-item-label" htmlFor="BT">Air Baltic Corporation A/S</label>
            </div>
            <span>{`от ${minPrices.BT} р.`}</span>
          </div>

          <div className="mb-5 carrier-item flex flex-row">
            <div className="carrier-item-label">
              <input
                type="checkbox"
                id="AZ"
                name="AZ"
                checked={filterValues.AZ}
                onChange={handleAZ}
              />
              <label className="carrier-item-label" htmlFor="AZ">Alitalia Societa Aerea Italiana</label>
            </div>
            <span>{`от ${minPrices.AZ} р.`}</span>
          </div>

          <div className="mb-5 carrier-item flex flex-row">
            <div className="carrier-item-label">
              <input
                type="checkbox"
                id="PC"
                name="PC"
                checked={filterValues.PC}
                onChange={handlePC}
              />
              <label className="carrier-item-label" htmlFor="PC">Pegasus Hava Tasimaciligi A.S.</label>
            </div>
            <span>{`от ${minPrices.PC} р.`}</span>
          </div>

          <div className="mb-5 carrier-item flex flex-row">
            <div className="carrier-item-label">
              <input
                type="checkbox"
                id="SN"
                name="SN"
                checked={filterValues.SN}
                onChange={handleSN}
              />
              <label className="carrier-item-label" htmlFor="SN">Brussels Airlines</label>
            </div>
            <span>{`от ${minPrices.SN} р.`}</span>
          </div>

          <div className="mb-5 carrier-item flex flex-row">
            <div className="carrier-item-label">
              <input
                type="checkbox"
                id="LO"
                name="LO"
                checked={filterValues.LO}
                onChange={handleLO}
              />
              <label className="carrier-item-label" htmlFor="LO">LOT Polish Airlines</label>
            </div>
            <span>{`от ${minPrices.LO} р.`}</span>
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default Filter;
