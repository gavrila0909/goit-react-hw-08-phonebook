import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getStatusFilter } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.listContainer}>
      <ul className={styles.listDiv}>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.name}</span> <span>{contact.number}</span>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
