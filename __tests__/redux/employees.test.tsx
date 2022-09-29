import { add, remove } from '../../src/redux/slices/employees';
import reducer from '../../src/redux/slices/employees';

export const payloadTest = {
  firstName: 'Valentin',
  lastName: 'Lemaire',
  startDate: '2022/09/08',
  department: 'Engineering',
  birthDate: '1997/12/02',
  street: '1600 Amphitheatre Parkway',
  city: 'Mountain View',
  state: 'CA',
  zipCode: '94043',
};

export const payloadTest2 = {
  firstName: 'Marie',
  lastName: 'Cohignac',
  startDate: '2022/09/08',
  department: 'Human Resources',
  birthDate: '2001/07/04',
  street: '405 East 42nd Street',
  city: 'New York',
  state: 'NY',
  zipCode: '10017',
};

describe('Employees actions', () => {
  it('Should create a add action object', () => {
    expect(add(payloadTest)).toEqual({
      payload: payloadTest,
      type: 'employees/add',
    });
  });
  it('Should create a remove action object', () => {
    expect(remove(1)).toEqual({
      payload: 1,
      type: 'employees/remove',
    });
  });
});

describe('Employees reducer', () => {
  it('Should return the initial state when state is undefined', () => {
    expect(reducer(undefined, { type: '@INIT' })).toEqual([]);
  });
  it('Should add an employee', () => {
    expect(reducer(undefined, add(payloadTest))).toEqual([payloadTest]);
  });
  it('Should remove the first employee', () => {
    expect(reducer([payloadTest, payloadTest2], remove(0))).toEqual([
      payloadTest2,
    ]);
  });
});
