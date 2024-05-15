export interface Employee {
  EmployeeID: number;
  UserID: number;
  FirstName: string;
  LastName: string;
  BirthDate: string | null;
  TelephoneNumber: string | null;
  Gender: string | null;
  Address: string | null;
  HireDate: string | null;
  TerminationDate: string | null;
  JobRole: {
    JobRole: string;
    Department: {
      DepartmentName: string;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  User: {
    Username: string;
    Email: string;
  };
}
