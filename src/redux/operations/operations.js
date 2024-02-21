// Import axios for making HTTP requests
import axios from 'axios';

// Import createAsyncThunk function from '@reduxjs/toolkit' for creating asynchronous thunks
import { createAsyncThunk } from '@reduxjs/toolkit';

// Set base URL for axios requests
axios.defaults.baseURL = 'https://65d1fef9987977636bfbc75f.mockapi.io';

// Async thunk function to fetch contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // Async function to handle fetching contacts
  async (_, thunkAPI) => {
    try {
      // Send GET request to retrieve contacts
      const response = await axios.get('/contacts');
      // Return the retrieved data
      return response.data;
    } catch (e) {
      // Return an error with rejected value if request fails
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Async thunk function to add a contact
export const addContact = createAsyncThunk(
  'contacts/addContact',
  // Async function to handle adding a contact
  async ({ name, phone }, thunkAPI) => {
    try {
      // Send POST request to add a contact
      const response = await axios.post('/contacts', { name, phone });
      // Return the added contact data
      return response.data;
    } catch (e) {
      // Return an error with rejected value if request fails
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Async thunk function to delete a contact
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  // Async function to handle deleting a contact
  async (contactId, thunkAPI) => {
    try {
      // Send DELETE request to delete a contact
      const response = await axios.delete(`/contacts/${contactId}`);
      // Return the deleted contact data
      return response.data;
    } catch (e) {
      // Return an error with rejected value if request fails
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
