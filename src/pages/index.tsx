import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectEmployees } from '../redux/slices/employees';

import PATTERN_NAME from '../utils/patternName';

import Input from '../components/Input';
import Select from '../components/Select';
import Modal from '../components/Modal';

import STATES from '../data/states';
import DEPARTMENTS from '../data/departments';

import { createEmployee } from '../redux/slices/employees';

function Create() {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);
  const [modalText, setModalText] = useState('Employee created !');

  return (
    <main id='Create'>
      <h2 className='glass-container'>Create Employee</h2>
      <form
        id='create-employee'
        onSubmit={(e) => createEmployee(e, employees, dispatch, setModalText)}
        className='glass-container'
        data-testid='form'
      >
        <div className='flex-input'>
          <Input
            name='first-name'
            label='First Name'
            type='text'
            pattern={PATTERN_NAME.regex}
            errorMessage={PATTERN_NAME.message}
          />
          <Input
            name='last-name'
            label='Last Name'
            type='text'
            pattern={PATTERN_NAME.regex}
            errorMessage={PATTERN_NAME.message}
          />
        </div>

        <div className='flex-input'>
          <Input
            name='date-of-birth'
            label='Date of Birth'
            type='date'
            min={'1900-01-01'}
            max={'2006-01-01'}
          />
          <Input
            name='start-date'
            label='Start Date'
            type='date'
            min={'2020-01-01'}
          />
        </div>

        <fieldset className='address'>
          <legend>Address</legend>

          <Input
            name='street'
            label='Street'
            type='text'
            minLength={5}
            maxLength={70}
          />

          <Input
            name='city'
            label='City'
            type='text'
            minLength={2}
            maxLength={30}
          />

          <Input
            name='zip-code'
            label='Zip Code'
            type='number'
            min={1}
            max={99950}
          />

          <Select name='state' options={Object.values(STATES)} />
        </fieldset>

        <Select name='department' options={DEPARTMENTS} />

        <button>Create Employee</button>
      </form>
      <Modal
        text={modalText}
        links={[{ path: '/list', text: 'View current employees' }]}
      />
    </main>
  );
}

export default Create;
