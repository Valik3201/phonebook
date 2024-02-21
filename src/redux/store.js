import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducers/contactsSlice';
import filterReducer from './reducers/filterSlice';

// Create and export the Redux store using configureStore function
export const store = configureStore({
  // Define reducers for different parts of the state
  reducer: {
    // Contacts reducer for managing contacts state
    contacts: contactsReducer,
    // Filter reducer for managing filter state
    filter: filterReducer,
  },
});
