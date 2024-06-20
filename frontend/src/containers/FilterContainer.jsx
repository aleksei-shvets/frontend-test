/* eslint-disable jsx-a11y/label-has-associated-control */
import { useSelector } from 'react-redux';
import Sort from '../components/Sort';
import Filter from '../components/Filter.jsx';
import { getFilters, getSortType } from '../store/filterSlise';

const FilterContainer = () => {
  const fil = useSelector(getFilters);
  const sr = useSelector(getSortType);
  console.log(fil, sr);
  return (
    <aside>
      <Sort />
      <Filter />
    </aside>
  );
};

export default FilterContainer;
