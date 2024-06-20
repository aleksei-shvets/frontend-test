/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { setSortType, getSortType } from '../store/filterSlise.js';

const Sort = () => {
  const dispatch = useDispatch();

  const sort = useSelector(getSortType);

  const handleRadio = (e) => {
    dispatch(setSortType(e.target.value));
  };

  return (
    <section className="flex flex-col">
      <fieldset className="sort-box flex flex-col">
        <h3 className="title">Сортировать</h3>
        <fieldset className="flex flex-col">
          <div className="flex filter-item">
            <input
              type="radio"
              id="priceUp"
              name="sort"
              value="priceUp"
              checked={sort === 'priceUp'}
              onChange={handleRadio}
            />
            <label htmlFor="priceUp"> - по возрастанию цены</label>
          </div>
          <div className="flex filter-item">
            <input
              type="radio"
              id="priceDown"
              name="sort"
              value="priceDown"
              checked={sort === 'priceDown'}
              onChange={handleRadio}
            />
            <label htmlFor="priceDown"> - по убыванию цены</label>
          </div>
          <div className="flex filter-item">
            <input
              type="radio"
              id="flyTime"
              name="sort"
              value="flyTime"
              checked={sort === 'flyTime'}
              onChange={handleRadio}
            />
            <label htmlFor="flyTime"> - по времени в пути</label>
          </div>
        </fieldset>
      </fieldset>
    </section>
  );
};

export default Sort;
