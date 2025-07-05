// Import Redux Toolkit utilities to create a slice and type action payloads
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define possible values for the counter status
type CounterStatus = 'active' | 'inactive' | 'pending...';

// Define the structure of the state for the counter
type CounterState = {
  count: number;
  status: CounterStatus;
};

// Initial state for the counter slice
const initialState: CounterState = {
  count: 10,
  status: 'pending...',
};

// Create a slice for the counter feature using Redux Toolkit
export const counterSlice = createSlice({
  // Name of the slice (used in Redux DevTools and action types)
  name: 'counter',

  // Initial state for this slice
  initialState,

  // Reducer functions to update the state based on dispatched actions
  reducers: {
    // Increments the count value by 1
    increment: (state) => {
      state.count += 1;
    },

    // Decrements the count value by 1
    decrement: (state) => {
      state.count -= 1;
    },

    // Resets the count value to 0
    reset: (state) => {
      state.count = 0;
    },

    // Updates the status field with the given payload value
    // PayloadAction is used to infer the payload type (CounterStatus) with TypeScript
    setStatus: (state, action: PayloadAction<CounterStatus>) => {
      state.status = action.payload;
    },
  },
});

// Export action creators generated automatically from the slice
export const { increment, decrement, reset, setStatus } = counterSlice.actions;

// Export the reducer function to include in the Redux store
export default counterSlice.reducer;
