import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './starter/09-rtk/counterSlice';

// Create the Redux store using Redux Toolkit's configureStore function
export const store = configureStore({
  // Define the root reducer object where each key corresponds to a slice of state
  reducer: {
    // Attach the counterReducer under the "counter" key in the Redux state
    counter: counterReducer,
  },
});
// Define a TypeScript type for the entire Redux state structure,
// by extracting the return type of the store's getState function.
export type RootState = ReturnType<typeof store.getState>;

// Define a TypeScript type for the Redux dispatch function,
// by extracting the type of the store's dispatch method.
export type AppDispatch = typeof store.dispatch;
