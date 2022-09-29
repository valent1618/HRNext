import capitalizeFirstLetter from '../../src/utils/capitalizeFirstLetter';
import { payloadTest, payloadTest2 } from '../redux/employees.test';
import findEmployee from '../../src/utils/findEmployee';
import formatZipCode from '../../src/utils/formatZipCode';
import getObjKey from '../../src/utils/getObjKey';

describe('Utils functions', () => {
  it('Should capitalize the first letter of each word in a string', () => {
    expect(capitalizeFirstLetter('test-string')).toBe('Test-String');
    expect(capitalizeFirstLetter('TEST STRING')).toBe('Test String');
  });
  it('Should find the employee', () => {
    const employees = [payloadTest, payloadTest2];
    const employeeToFind = {
      firstName: 'Marie',
      lastName: 'Cohignac',
      birthDate: '2001/07/04',
    };
    expect(findEmployee(employees, employeeToFind)).toBe(payloadTest2);
  });
  it('Should add 0 if zip code length is inferior to 5', () => {
    expect(formatZipCode('35')).toBe('00035');
  });
  it('Should get object key from its value', () => {
    const obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
    expect(getObjKey(obj, 'value2')).toBe('key2');
  });
});
