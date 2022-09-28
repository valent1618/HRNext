import { Employee, EmployeeToFind } from './interfaces';

function findEmployee(employees: Employee[], toFind: EmployeeToFind) {
  return employees.find(
    (employee) =>
      employee.firstName === toFind.firstName &&
      employee.lastName === toFind.lastName &&
      employee.birthDate === toFind.birthDate
  );
}

export default findEmployee;
