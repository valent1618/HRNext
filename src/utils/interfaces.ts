export interface Employee {
  firstName: string;
  lastName: string;
  startDate: string;
  department: string;
  birthDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface EmployeeToFind {
  firstName: string;
  lastName: string;
  birthDate: string;
}
