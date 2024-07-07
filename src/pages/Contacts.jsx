import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { getError, getIsLoading } from '../redux/contacts/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import styles from './Contacts.module.css';

const Contacts = () => {
  console.log('Fetching contacts...');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    console.log('Fetching contacts...');
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.mainContainer}>
      <ContactForm />
      {isLoading && !error ? (
        <b>Request in progress...</b>
      ) : (
        <>
          {contacts.length > 0 ? (
            <div className={styles.contactsListContainer}>
              <Filter />
              <ContactList />
            </div>
          ) : (
            <h1 className={styles.title}>Add your first contact</h1>
          )}
        </>
      )}
    </div>
  );
};

export default Contacts;
