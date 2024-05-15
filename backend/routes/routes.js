const express = require("express");
const { login } = require("../controllers/loginController");
const { employeeAdd, employeeUpdate, employeeByID, employeeDelete, employeeList } = require("../controllers/employerController");
const { leaveAdd, updateLeaveStatus, leaveBalance, leaveHistory, leaveList } = require("../controllers/leaveController");
const { clockIn, clockOut, calculateWorkedHours } = require("../controllers/timeAndAttendanceController");
const router = express.Router()

router.post("/login", login)

//employee
router.get("/employees", employeeList);
router.post("/employees", employeeAdd);
router.get("/employees/:id", employeeByID);
router.put("/employees/:id", employeeUpdate);
router.delete("/employees/:id", employeeDelete);

//leave
router.get("/leave", leaveList);
router.post("/leave", leaveAdd);
router.post("/leaveStatus", updateLeaveStatus);
router.get("/leaveBalance", leaveBalance);
router.get("/leaveHistory", leaveHistory);

//time and attendance
router.post("/clockIn", clockIn);
router.post("/clockOut", clockOut);
router.get("/workedHours", calculateWorkedHours);

module.exports=router;