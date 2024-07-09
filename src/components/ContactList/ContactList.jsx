import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getStatusFilter } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/contactsSlice';
import Notiflix from 'notiflix';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success('Contact deleted successfully');
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nume/Prenume</th>
            <th>Număr de telefon</th>
            <th>Acțiuni</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
