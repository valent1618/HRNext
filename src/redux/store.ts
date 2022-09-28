import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './slices/employees';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {counter: CounterState}
export type AppDispatch = typeof store.dispatch;
