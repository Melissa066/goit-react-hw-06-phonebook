import { useDispatch } from 'react-redux';
import { StyledFilter } from './Filter.styled';
import { changeFilter } from 'redux/filter-slice';
import { useSelector } from 'react-redux';
import { selectFilters } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const handlerChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <StyledFilter
      type="string"
      name="filter"
      value={filter}
      onChange={handlerChange}
    />
  );
};
