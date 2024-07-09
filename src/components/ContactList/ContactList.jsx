import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getStatusFilter } from '../../redux/contacts/selectors';
import { deleteContact, updateContact } from '../../redux/contacts/contactsSlice';
import Notiflix from 'notiflix';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();
  const [editContactId, setEditContactId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    number: ''
  });

  const handleDelete = id => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success('Contact deleted successfully');
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      number: contact.number
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleEditFormChange = event => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = event => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      number: editFormData.number
    };

    dispatch(updateContact(editedContact));
    Notiflix.Notify.success('Contact updated successfully');
    setEditContactId(null);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.tableContainer}>
      <form onSubmit={handleEditFormSubmit}>
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
                {editContactId === contact.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name}
                        onChange={handleEditFormChange}
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="number"
                        value={editFormData.number}
                        onChange={handleEditFormChange}
                        required
                      />
                    </td>
                    <td>
                      <button type="submit">Save</button>
                      <button type="button" onClick={handleCancelClick}>
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{contact.name}</td>
                    <td>{contact.number}</td>
                    <td>
                      <button
                        type="button"
                        onClick={event => handleEditClick(event, contact)}
                      >
                        Edit
                      </button>
                      <button onClick={() => handleDelete(contact.id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ContactList;
