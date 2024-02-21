import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../operations/operations';

const initialState = {
  items: [],

  isLoading: false,

  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  extraReducers: builder => {
    // Handle pending state for fetchContacts, addContact, and deleteContact actions
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      });

    // Handle successful fulfillment of fetchContacts action
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });

    // Handle successful fulfillment of addContact action
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });

    // Handle successful fulfillment of deleteContact action
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    });

    // Handle rejected state for fetchContacts, addContact, and deleteContact actions
    builder
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
