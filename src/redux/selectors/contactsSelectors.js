// Import createSelector function from '@reduxjs/toolkit' for creating memoized selectors
import { createSelector } from '@reduxjs/toolkit';

// Selector to get the contacts items from the state
export const selectContacts = state => state.contacts.items;

// Selector to get the loading state from the contacts slice of the state
export const selectIsLoading = state => state.contacts.isLoading;

// Selector to get the error state from the contacts slice of the state
export const selectError = state => state.contacts.error;

// Selector to get the filter state from the state
export const selectFilter = state => state.filter;

// Selector to filter visible contacts based on the filter state
export const selectVisibleContacts = createSelector(
  // Define input selectors
  [selectContacts, selectFilter],
  // Define selector function to calculate derived data
  (contacts, filter) => {
    // Filter contacts based on the filter text
    return contacts.filter(
      contact =>
        // Convert both contact name and filter text to lowercase for case-insensitive comparison
        contact.name.toLowerCase().includes(filter.toLowerCase()) || // Filter by name
        contact.phone.toLowerCase().includes(filter.toLowerCase()) // Filter by phone
    );
  }
);
