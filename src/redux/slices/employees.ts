import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../store';

import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import formatZipCode from '../../utils/formatZipCode';
import findEmployee from '../../utils/findEmployee';
import { openModal, closeModal } from '../../utils/handleModal';
import getObjKey from '../../utils/getObjKey';
import STATES from '../../data/states';

import { FormEvent, Dispatch, SetStateAction } from 'react';
import { Employee, EmployeeToFind } from '../../utils/interfaces';

const initialState: Employee[] = [];

const { actions, reducer } = createSlice({
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

// Actions
export const { add, remove } = actions;

// Selectors
export const selectEmployees = (state: RootState) => state.employees;

// Functions using actions
export function createEmployee(
  e: FormEvent<HTMLFormElement>,
  employees: RootState['employees'],
  dispatch: AppDispatch,
  setModalText: Dispatch<SetStateAction<string>>
) {
  e.preventDefault();
  const form = e.currentTarget;
  const firstName = capitalizeFirstLetter((form[0] as HTMLInputElement).value);
  const lastName = capitalizeFirstLetter((form[1] as HTMLInputElement).value);
  const birthDate = (form[2] as HTMLInputElement).value;
  const startDate = (form[3] as HTMLInputElement).value;
  const street = capitalizeFirstLetter((form[5] as HTMLInputElement).value);
  const city = capitalizeFirstLetter((form[6] as HTMLInputElement).value);
  const zipCode = formatZipCode((form[7] as HTMLInputElement).value);
  const state = getObjKey(STATES, (form[8] as HTMLInputElement).value);
  const department = (form[9] as HTMLInputElement).value;

  const toFind = { firstName, lastName, birthDate };

  if (findEmployee(employees, toFind)) {
    setModalText('Employee already exist...');
  } else {
    setModalText('Employee created !');
    const payload = {
      firstName,
      lastName,
      startDate,
      department,
      birthDate,
      street,
      city,
      state,
      zipCode,
    };
    dispatch(add(payload));
  }

  form.reset();
  openModal();
}

export function removeEmployee(
  toRemove: EmployeeToFind,
  employees: RootState['employees'],
  dispatch: AppDispatch
) {
  const employeeToRemove = findEmployee(employees, toRemove);
  if (employeeToRemove !== undefined) {
    const indexToRemove = employees.indexOf(employeeToRemove);

    dispatch(remove(indexToRemove));
  }
  closeModal();
}

export default reducer;
