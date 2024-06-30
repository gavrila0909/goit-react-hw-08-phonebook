import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { getError, getIsLoading } from '../redux/contacts/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';


const Contacts = () => {
  console.log('Fetching contacts...'); 
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    console.log("Fetching contacts...");
    dispatch(fetchContacts());
  }, [dispatch]);
  

  return (
    <div className={styles.mainContainer}>
      <h2>Phonebook</h2>
      <ContactForm />
      {isLoading && !error ? (
        <b>Request in progress...</b>
      ) : (
        <>
          {contacts.length > 0 ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <h3>No contacts yet</h3>
          )}
        </>
      )}
    </div>

  );
};

export default Contacts;
