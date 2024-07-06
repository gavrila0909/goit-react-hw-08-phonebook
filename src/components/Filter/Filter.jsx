import { useSelector, useDispatch } from 'react-redux';
import { getStatusFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/filtersSlice';
import styles from '../Filter/Filter.module.css';

const Filter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleAddFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        name="search"
        value={filter}
        onChange={handleAddFilter}
        placeholder="Find contact by name..."
      />
    </div>
  );
};

export default Filter;
