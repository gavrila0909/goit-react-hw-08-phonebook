import { useSelector, useDispatch } from 'react-redux';
import { getStatusFilter } from '../redux/contacts/selectors';
import { setFilter } from '../redux/contacts/filtersSlice';
import styles from '../components/Filter.module.css';

const Filter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleAddFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filterContainer}>
      <h2>Contacts</h2>
      <h4>Find contacts by name</h4>
      <input
        type="text"
        name="search"
        value={filter}
        onChange={handleAddFilter}
        placeholder="Find contact..."
      />
    </div>
  );
};

export default Filter;
