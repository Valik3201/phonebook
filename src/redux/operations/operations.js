import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65d1fef9987977636bfbc75f.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async (_, thunkAPI) => {
    try {
      // Send GET request to retrieve contacts
      const response = await axios.get('/contacts');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',

  async (contactData, thunkAPI) => {
    try {
      // Send POST request to add a contact
      const response = await axios.post('/contacts', contactData);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async (contactId, thunkAPI) => {
    try {
      // Send DELETE request to delete a contact
      const response = await axios.delete(`/contacts/${contactId}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
