import { useEffect, useState } from "react";
import employerApi from "../../services/EmployeeApi";
import { Employee } from "../../types/Employee";
import { formatDate } from "../../utility/DateFormatter";
import Modal from "../../molecules/Modal";
import Swal from "sweetalert2";

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  ); // State to manage the selected employee

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const openModal = async (employee: Employee) => {
    try {
      const response = await employerApi.fetchEmployee(employee.EmployeeID);
      setSelectedEmployee(response.employee);
      setIsOpen(true);
    } catch (error) {
      console.error("Error fetching employee:", error);
    }
  };

  const getEmployees = async () => {
    try {
      const data = await employerApi.fetchEmployees();
      setEmployees(data.employees);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []); // Empty dependency array to ensure it runs only once

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const value = e.target.value;
    setSelectedEmployee((prevEmployee) => ({
      ...prevEmployee!,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await employerApi.updateEmployee(
        selectedEmployee!.EmployeeID,
        selectedEmployee!
      );
      getEmployees(); // Fetch the updated list of employees
      setIsOpen(false);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await employerApi.deleteEmployee(id);
      getEmployees(); // Fetch the updated list of employees
      Swal.fire({
        title: "Success!",
        text: "Employee deleted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error deleting employee:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to delete employee.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12 stretch-card">
          <div className="card">
            <div className="card-body d-flex justify-content-between align-items-center">
              <h4 className="card-title">Employees</h4>
              <button type="button" className="btn btn-primary">
                Add
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Contact</th>
                    <th>DOB</th>
                    <th>Position</th>
                    <th>Joined Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees?.map((employee, index) => (
                    <tr key={index}>
                      <td className="py-1">
                        <img src="../../images/faces/face1.jpg" alt="image" />
                        {"  "}{employee.FirstName} {employee.LastName}
                      </td>
                      <td>{employee.User.Email} <br/> {employee.TelephoneNumber}</td>
                      <td>{employee.BirthDate ? (
                          formatDate(employee.BirthDate)
                        ) : (
                          <span className="text-muted">Not Updated</span>
                        )}</td>
                      <td>
                        {employee.JobRole ? (
                          employee.JobRole.JobRole
                        ) : (
                          <span className="text-muted">Not Updated</span>
                        )}<br/>
                        {employee.JobRole ? (
                          employee.JobRole.Department?.DepartmentName
                        ) : (
                          <span className="text-muted">Not Updated</span>
                        )}
                      </td>
                      <td>
                        {employee.HireDate ? (
                          formatDate(employee.HireDate)
                        ) : (
                          <span className="text-muted">Not Updated</span>
                        )}
                      </td>
                      <td>
                        <i
                          className="mdi mdi-pencil icon-lg"
                          onClick={() => openModal(employee)}
                        ></i>
                        <i
                          className="mdi mdi-delete icon-lg"
                          onClick={() => {
                            Swal.fire({
                              title: "Are you sure?",
                              text: "You won't be able to revert this!",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#3085d6",
                              cancelButtonColor: "#d33",
                              confirmButtonText: "Yes, delete it!",
                            }).then((result) => {
                              if (result.isConfirmed) {
                                handleDelete(employee.EmployeeID);
                              }
                            });
                          }}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isOpen && selectedEmployee && (
        <Modal onClose={toggleModal}>
          <h3 className="pb-4">Edit Employee Details</h3>
          <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <br />
            <input
              type="text"
              className="form-control"
              value={selectedEmployee.FirstName}
              onChange={(e) => handleInputChange(e, "FirstName")}
            />
            <label>Last Name:</label>
            <br />
            <input
              type="text"
              className="form-control"
              value={selectedEmployee.LastName}
              onChange={(e) => handleInputChange(e, "LastName")}
            />
            <label>Date of Birth:</label>
            <br />
            <input
              type="date"
              className="form-control"
              value={formatDate(selectedEmployee.BirthDate)}
              onChange={(e) => handleInputChange(e, "DateOfBirth")}
            />
            <label>Gender:</label>
            <br />
            <label>
              <input
                type="radio"
                value="Male"
                checked={selectedEmployee.Gender === "Male"}
                onChange={(e) => handleInputChange(e, "Gender")}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                checked={selectedEmployee.Gender === "Female"}
                onChange={(e) => handleInputChange(e, "Gender")}
              />
              Female
            </label>
            <br />
            <label>Address:</label>
            <br />
            <input
              type="text"
              className="form-control"
              value={selectedEmployee.Address ?? ""}
              onChange={(e) => handleInputChange(e, "Address")}
            />
            <br />
            <label>Email:</label>
            <br />
            <input
              type="email"
              className="form-control"
              value={selectedEmployee.User?.Email ?? ""}
              onChange={(e) => handleInputChange(e, "Email")}
            />
            <br />
            <label>Username:</label>
            <br />
            <input
              type="text"
              className="form-control"
              value={selectedEmployee.User?.Username ?? ""}
              onChange={(e) => handleInputChange(e, "Username")}
            />
            <br />
            <label>Hire Date:</label>
            <br />
            <input
              type="date"
              className="form-control"
              value={formatDate(selectedEmployee.HireDate)}
              onChange={(e) => handleInputChange(e, "HireDate")}
            />
            <br />
            {/* Add other fields from the selectedEmployee object */}
            <button type="submit">Submit</button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default Employees;
