const bcrypt = require('bcrypt');
const { Employee, User, JobRole, Department } = require("../sequelize");
const { createTransporter } = require('../transporter/emailService')
const jwt = require('jsonwebtoken');

const employeeList = async (req, res) => {
    try {
        // Find all employees with their associated user details (username and email)
        const employees = await Employee.findAll({
            include: [
                { 
                    model: User, 
                    attributes: ['Username', 'Email', 'Role'] // Include user details
                },
                { 
                    model: JobRole, 
                    attributes: ['JobRole'], // Include job role details
                    include: [
                        { 
                            model: Department, 
                            attributes: ['DepartmentName'] // Include department details
                        }
                    ]
                }
            ]
        });

        // Send the list of employees with username and email in the response
        res.status(200).json({ employees });
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const employeeAdd = async (req, res) => {
    try {
        // Extract data from request body
        const {
            Username,
            Email,
            FirstName,
            LastName,
            Address,
            TelephoneNumber,
            JobRoleID,
            ManagerID,
            HireDate,
            BirthDate,
            BankDetails,
            Role
        } = req.body;

        // Hash the provided password
        const hashedPassword = await bcrypt.hash('default', 10);

        // Create user record in the User table
        const newUser = await User.create({
            Username,
            Email,
            Role,
            Password: hashedPassword
        });

        // Retrieve the UserID generated for the new user
        const { UserID } = newUser;

        // Create employee record and associate it with the user
        const newEmployee = await Employee.create({
            FirstName,
            LastName,
            Address,
            TelephoneNumber,
            JobRoleID,
            ManagerID,
            HireDate,
            BirthDate,
            BankDetails,
            UserID // Associate with the newly created user
        });

        // Send email to the newly added employee
        const transporter = createTransporter();
        await transporter.sendMail({
            from: process.env.EMAIL_SENDER,
            to: Email, // Use the email provided in the request body
            subject: 'Welcome to the Company',
            html: `Dear ${FirstName} ${LastName},<br><br>Welcome to our company!<br><br>Your account has been created successfully.<br><br>Best regards,<br>The Management`,
        });

        // Send response
        res.status(201).json({
            message: 'Employee added successfully',
            employee: newEmployee
        });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            // Handle unique constraint violation error
            return res.status(400).json({ error: 'Username or Email already exists' });
        }
        console.error('Error adding employee:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const employeeUpdate = async (req, res) => {
    try {
        // Extract employee details from request body
        const {
          FirstName,
          LastName,
          Address,
          TelephoneNumber,
          Email,
          JobRoleID,
          ManagerID,
          HireDate,
          BirthDate,
          BankDetails,
          Username,
          Password,
          Role
        } = req.body;
    
        const { id } = req.params;
        // Hash the password if provided
        let hashedPassword;
        if (Password) {
          hashedPassword = await bcrypt.hash(Password, 10);
        }
    
        // Find the user and employee records based on the provided UserID
        const user = await User.findByPk(id);
        const employee = await Employee.findOne({ where: { UserID: id } });
    
        // Update user and employee records with new details
        await user.update({
          Username,
          Email,
          Role,
          Password: hashedPassword || user.Password // Update password only if provided
        });
    
        await employee.update({
          FirstName,
          LastName,
          Address,
          TelephoneNumber,
          JobRoleID,
          ManagerID,
          HireDate,
          BirthDate,
          BankDetails
        });
    
        // Send success response
        res.status(200).json({ message: 'Employee details updated successfully' });
    } catch (error) {
        console.error('Error updating employee:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const employeeByID = async (req, res) => {
    try {
        // Extract UserID from request parameters
        const { id } = req.params;

        // Find the employee based on the provided UserID
        const employee = await Employee.findOne({ 
            where: { EmployeeID: id },
            include: [
                { 
                    model: User, 
                    attributes: ['Username', 'Email', 'Role'] // Include user details
                },
                { 
                    model: JobRole, 
                    attributes: ['JobRole'], // Include job role details
                    include: [
                        { 
                            model: Department, 
                            attributes: ['DepartmentName'] // Include department details
                        }
                    ]
                }
            ]
        });

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        // Send employee details in the response
        res.status(200).json({ employee });
    } catch (error) {
        console.error('Error fetching employee details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const employeeDelete = async (req, res) => {
    try {
        // Extract employee ID from request parameters
        const { id } = req.params;

        // Find the employee based on the provided ID
        const employee = await Employee.findByPk(id);

        // If employee not found, return 404 error
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        // Delete the associated user record first
        await User.destroy({ where: { UserID: employee.UserID } });

        // Delete the employee record
        await employee.destroy();

        // Send success response
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error('Error deleting employee:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
  employeeList,
  employeeAdd,
  employeeUpdate,
  employeeByID,
  employeeDelete
};