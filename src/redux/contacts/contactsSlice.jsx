import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { fetchContacts } from '../contacts/operations';

const initialContacts = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: initialContacts.contacts,
    isLoading: true,
    error: null,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        const { id, name, number } = action.payload;
        const existingContact = state.contacts.find(
          contact => contact.name === name
        );
        if (!existingContact) {
          state.contacts.push({ id, name, number });
        } else {
          Notiflix.Notify.failure(`${name} already exists in the list`);
        }
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    updateContact(state, action) {
      const { id, name, number } = action.payload;
      const existingContact = state.contacts.find(contact => contact.id === id);
      if (existingContact) {
        existingContact.name = name;
        existingContact.number = number;
      } else {
        Notiflix.Notify.failure('Contact not found');
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.concat(action.payload);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addContact, deleteContact, updateContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
