import { createSlice } from '@reduxjs/toolkit';

// Initial state for the filter slice
const initialState = '';

// Redux slice for managing the filter
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // Reducer function to set the filter value
    setFilter: (_state, action) => {
      // Return the payload as the new filter value
      return action.payload;
    },
  },
});

// Action creator for setting the filter
export const { setFilter } = filterSlice.actions;

// Reducer for the filter slice
export default filterSlice.reducer;
