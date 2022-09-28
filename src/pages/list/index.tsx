import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectEmployees } from '../../redux/slices/employees';

import tableHeader from '../../data/tableHeader';
import { Table } from 'plaid-components';
import Modal from '../../components/Modal';

import eventRemove from './eventRemove';
import { removeEmployee } from '../../redux/slices/employees';
import { closeModal } from '../../utils/handleModal';

import { EmployeeToFind } from '../../utils/interfaces';

function List() {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);

  const [toRemove, setToRemove] = useState<EmployeeToFind>({
    firstName: '',
    lastName: '',
    birthDate: '',
  });

  useEffect(() => {
    employees.length > 0 && eventRemove(setToRemove);
  }, [employees]);

  return (
    <main id='List'>
      <Table title='Current employees' headers={tableHeader} body={employees} />
      {employees.length > 0 && (
        <Modal
          text={`Do you want to delete ${toRemove.firstName} ?`}
          buttons={[
            {
              action: () => removeEmployee(toRemove, employees, dispatch),
              text: 'Yes',
            },
            { action: () => closeModal(), text: 'No' },
          ]}
        />
      )}
    </main>
  );
}

export default List;
