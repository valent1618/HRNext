import { ReactNode } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from './src/utils/interfaces';

function render(ui: JSX.Element, initialState: Employee[] = []) {
  const { reducer } = createSlice({
    name: 'employees',
    initialState: initialState,
    reducers: {
      add: (state, action: PayloadAction<Employee>) => {
        state.push(action.payload);
        return;
      },
      remove: (state, action: PayloadAction<number>) => {
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

  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  rtlRender(ui, { wrapper: Wrapper });
}

export default render;
