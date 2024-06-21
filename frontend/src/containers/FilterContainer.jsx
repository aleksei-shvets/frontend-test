/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useSelector } from 'react-redux';
import Sort from '../components/Sort';
import Filter from '../components/Filter.jsx';
// import { getFilters, getSortType } from '../store/filterSlise';

const FilterContainer = () => (
  <aside className="aside">
    <Sort />
    <Filter />
  </aside>
);

export default FilterContainer;
