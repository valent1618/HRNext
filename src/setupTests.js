import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import employeesReducer from './redux/slices/employees';

function render(ui, initialState = []) {
  const { reducer } = createSlice({
    name: 'employees',
    initialState: initialState,
    reducers: {
      add: (state, action) => {
        state.push(action.payload);
        return;
      },
      remove: (state, action) => {
        state.splice(action.payload, 1);
        return;
      },
    },
  });

  const store = configureStore({
    reducer: {
      employees: reducer,
    },
  });

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  rtlRender(ui, { wrapper: Wrapper });
}

export default render;
