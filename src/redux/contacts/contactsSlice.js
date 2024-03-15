import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(updateContact.pending, handlePending);

    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });

    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
    });

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

    builder.addCase(updateContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;

      const updatedContactIndex = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      if (updatedContactIndex !== -1) {
        state.items[updatedContactIndex] = action.payload;
      }
    });

    builder.addCase(logOut.fulfilled, state => {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    });

    builder
      .addCase(fetchContacts.rejected, handleError)
      .addCase(addContact.rejected, handleError)
      .addCase(deleteContact.rejected, handleError)
      .addCase(updateContact.rejected, handleError);
  },
});

const contactsReducer = contactsSlice.reducer;

export default contactsReducer;
