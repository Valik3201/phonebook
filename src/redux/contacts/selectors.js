// Import createSelector function from '@reduxjs/toolkit' for creating memoized selectors
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],

  (contacts, filter) => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
