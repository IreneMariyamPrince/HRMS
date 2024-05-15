const { Leave, Employee } = require("../sequelize");
const { Op } = require("sequelize");

const leaveList = async (req, res) => {
    try {
        // Query all leave records from the Leave table
        const allLeaves = await Leave.findAll();

        // Send response with the list of leave records
        res.status(200).json({ leaves: allLeaves });
    } catch (error) {
        console.error('Error retrieving leave list:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const leaveAdd = async (req, res) => {
  try {
    // Extract data from request body
    const { EmployeeID, LeaveType, StartDate, EndDate, Reason } = req.body;

    // Validate start date and end date
    const currentDate = new Date();
    if (
      new Date(StartDate) < currentDate ||
      new Date(EndDate) < new Date(StartDate)
    ) {
      return res.status(400).json({ error: "Invalid date range" });
    }

    // Check for overlap with existing leave requests
    const overlappingLeave = await Leave.findOne({
      where: {
        EmployeeID,
        [Op.or]: [
          {
            StartDate: {
              [Op.between]: [StartDate, EndDate],
            },
          },
          {
            EndDate: {
              [Op.between]: [StartDate, EndDate],
            },
          },
        ],
      },
    });

    if (overlappingLeave) {
      return res
        .status(400)
        .json({ error: "Leave request overlaps with existing leave" });
    }

    // Check if the employee has remaining leave in the specified category
    const leavesTaken = await Leave.findAll({
      where: {
        EmployeeID,
        LeaveType,
        ApprovalStatus: "1", // Assuming '1' represents approved leave requests
      },
    });

    const totalLeavesTaken = leavesTaken.length;

    // Define the total allotted leaves based on the LeaveType
    let totalAllottedLeaves;
    if (LeaveType === "Sick") {
      totalAllottedLeaves = 12; // Assuming each employee has 12 sick leaves
    } else if (LeaveType === "Casual") {
      totalAllottedLeaves = 12; // Assuming each employee has 12 casual leaves
    } else {
      // Handle other LeaveTypes if needed
      return res.status(400).json({ error: "Invalid LeaveType" });
    }

    // Check if the employee has remaining leave
    if (totalLeavesTaken >= totalAllottedLeaves) {
      return res
        .status(400)
        .json({ error: "No remaining leave in the specified category" });
    }

    // Create leave record
    const newLeave = await Leave.create({
      EmployeeID,
      LeaveType,
      StartDate,
      EndDate,
      Reason,
      ApprovalStatus: "2", // Pending by default
    });

    // Send response
    res.status(201).json({
      message: "Leave request added successfully",
      leave: newLeave,
    });
  } catch (error) {
    console.error("Error adding leave request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateLeaveStatus = async (req, res) => {
  try {
    const { LeaveID, ApprovalBy, ApprovalStatus } = req.body;

    // Check if the leave request exists
    const leaveRequest = await Leave.findByPk(LeaveID);

    if (!leaveRequest) {
      return res.status(404).json({ error: "Leave request not found" });
    }

    // Update leave request with approval/rejection/cancellation details
    if (ApprovalStatus == "1" || ApprovalStatus == "3") {
      // Approved or rejected
      await leaveRequest.update({
        ApprovalStatus,
        ApprovalDate: new Date(),
        ApprovalBy,
      });
    } else if (ApprovalStatus == "4") {
      // Canceled
      // Check if the leave request is already approved or rejected
      if (
        leaveRequest.ApprovalStatus == "1" ||
        leaveRequest.ApprovalStatus == "3"
      ) {
        return res
          .status(400)
          .json({ error: "Cannot cancel approved or rejected leave requests" });
      }
      await leaveRequest.update({
        ApprovalStatus,
        ApprovalDate: null, // Reset ApprovalDate
        ApprovalBy: null, // Reset ApprovalBy
      });
    } else {
      return res.status(400).json({ error: "Invalid ApprovalStatus" });
    }

    // Send response
    res
      .status(200)
      .json({
        message: `Leave request ${
          ApprovalStatus == "1"
            ? "approved"
            : ApprovalStatus == "3"
            ? "rejected"
            : "canceled"
        } successfully`,
      });
  } catch (error) {
    console.error("Error updating leave request status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const leaveBalance = async (req, res) => {
  try {
    // Get employee ID from request
    const { EmployeeID } = req.body;

    // Find the employee
    const employee = await Employee.findByPk(EmployeeID);

    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    // Calculate remaining sick and casual leaves
    const totalSickLeaves = 12; // Assuming each employee has 12 sick leaves
    const totalCasualLeaves = 12; // Assuming each employee has 12 casual leaves

    // Query the LeaveManagement table to get the total sick and casual leaves taken by the employee
    const leavesTaken = await Leave.findAll({
      where: {
        EmployeeID,
        LeaveType: ["Sick", "Casual"], // Assuming 'Sick' and 'Casual' are the leave types in your LeaveManagement table
        ApprovalStatus: "1", // Assuming '1' represents approved leave requests
      },
    });

    let sickLeavesTaken = 0;
    let casualLeavesTaken = 0;

    // Calculate the total sick and casual leaves taken
    leavesTaken.forEach((leave) => {
      if (leave.LeaveType === "Sick") {
        sickLeavesTaken++;
      } else if (leave.LeaveType === "Casual") {
        casualLeavesTaken++;
      }
    });

    // Calculate remaining sick and casual leaves
    const remainingSickLeaves = totalSickLeaves - sickLeavesTaken;
    const remainingCasualLeaves = totalCasualLeaves - casualLeavesTaken;

    // Send response with leave balances
    res.status(200).json({
      EmployeeID,
      EmployeeName: employee.name, // Assuming there's a 'name' attribute in your Employee model
      RemainingSickLeaves: remainingSickLeaves,
      RemainingCasualLeaves: remainingCasualLeaves,
    });
  } catch (error) {
    console.error("Error calculating leave balance:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const leaveHistory = async (req, res) => {
  try {
    // Get employee ID from request
    const { EmployeeID } = req.body;

    // Find the employee
    const employee = await Employee.findByPk(EmployeeID);

    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    // Query the LeaveManagement table to get the leave history of the employee
    const leaveHistory = await Leave.findAll({
      where: {
        EmployeeID,
      },
      attributes: ["LeaveType", "StartDate", "EndDate", "ApprovalStatus"], // Specify the attributes to retrieve
    });

    // Send response with leave history
    res.status(200).json({
      EmployeeID,
      EmployeeName: employee.name, // Assuming there's a 'name' attribute in your Employee model
      LeaveHistory: leaveHistory,
    });
  } catch (error) {
    console.error("Error retrieving leave history:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  leaveList,
  leaveAdd,
  updateLeaveStatus,
  leaveBalance,
  leaveHistory,
};
