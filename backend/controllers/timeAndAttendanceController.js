const { TimeAndAttendance } = require("../sequelize")
const moment = require('moment');
const { Op } = require("sequelize");

const clockIn = async (req, res) => {
    try {
        // Extract data from the request body
        const { EmployeeID } = req.body;

        // Get the current date and time
        const currentDate = moment().startOf('day'); // Truncate time to the beginning of the day
        const currentTime = moment().format('HH:mm:ss'); // Format time as HH:mm:ss

        // Find the latest clock-in entry for the employee on the current date
        const latestClockEntry = await TimeAndAttendance.findOne({
            where: {
                EmployeeID,
                Date: {
                    [Op.gte]: currentDate.toDate(), // Greater than or equal to the start of the day
                    [Op.lt]: moment(currentDate).add(1, 'days').toDate() // Less than the start of the next day
                }
            },
            order: [['createdAt', 'DESC']] // Get the latest entry
        });

        // Check if the latest entry exists and it has a clock out time
        if (latestClockEntry && latestClockEntry.ClockOutTime) {
            // Create a new record for clocking in
            const clockInRecord = await TimeAndAttendance.create({
                EmployeeID,
                Date: currentDate,
                ClockInTime: currentTime
            });

            // Send success response
            return res.status(200).json({ message: 'Clock in successful', record: clockInRecord });
        }

        // Check if the employee has already clocked in for the current date
        if (latestClockEntry && latestClockEntry.ClockInTime) {
            return res.status(400).json({ error: 'Employee has already clocked in for today' });
        }

        // Create a new record for clocking in
        const clockInRecord = await TimeAndAttendance.create({
            EmployeeID,
            Date: currentDate,
            ClockInTime: currentTime
        });

        // Send success response
        res.status(200).json({ message: 'Clock in successful', record: clockInRecord });
    } catch (error) {
        console.error('Error during clock in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const clockOut = async (req, res) => {
    try {
        // Extract necessary data from the request
        const { EmployeeID } = req.body;

        // Get the current date and time
        const currentDate = moment().startOf('day'); // Truncate time to the beginning of the day
        const currentTime = moment().format('HH:mm:ss'); // Format time as HH:mm:ss

        // Find the latest clock-in entry for the employee on the current date
        const latestClockEntry = await TimeAndAttendance.findOne({
            where: {
                EmployeeID,
                Date: {
                    [Op.gte]: currentDate.toDate(), // Greater than or equal to the start of the day
                    [Op.lt]: moment(currentDate).add(1, 'days').toDate() // Less than the start of the next day
                }
            },
            order: [['createdAt', 'DESC']] // Get the latest entry
        });

        // Check if the latest entry exists and it has a clock out time
        if (latestClockEntry && latestClockEntry.ClockOutTime) {
            // Create a new record for clocking out
            const clockOutRecord = await TimeAndAttendance.create({
                EmployeeID,
                Date: currentDate,
                ClockInTime: currentTime
            });

            // Send success response
            return res.status(200).json({ message: 'Clock out successful', record: clockOutRecord });
        }

        // Update the existing clock-in entry with the clock-out time
        await latestClockEntry.update({
            ClockOutTime: currentTime
        });

        // Send success response
        res.status(200).json({ message: 'Employee clocked out successfully' });
    } catch (error) {
        console.error('Error clocking out:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const calculateWorkedHours = async (req, res) => {
    try {
        // Extract data from the request
        const { EmployeeID, StartDate, EndDate } = req.body;

        // Parse the start and end dates
        const parsedStartDate = moment(StartDate).startOf('day'); // Truncate time to the beginning of the day
        const parsedEndDate = moment(EndDate).endOf('day'); // Set time to end of the day

        // Find all clock-in and clock-out entries for the employee within the given period
        const entries = await TimeAndAttendance.findAll({
            where: {
                EmployeeID,
                Date: {
                    [Op.gte]: parsedStartDate.toDate(), // Greater than or equal to the start date
                    [Op.lte]: parsedEndDate.toDate() // Less than or equal to the end date
                },
                ClockOutTime: {
                    [Op.ne]: null // Exclude entries where clock-out time is null
                }
            }
        });

        // Calculate total worked hours for each date
        const dateWiseHours = {};
        const currentDate = moment(parsedStartDate); // Start from the parsed start date
        while (currentDate.isSameOrBefore(parsedEndDate)) { // Iterate until the current date is same or before the end date
            const formattedDate = currentDate.format('YYYY-MM-DD');
            dateWiseHours[formattedDate] = 0; // Initialize hours for each date to 0
            currentDate.add(1, 'days'); // Move to the next date
        }

        entries.forEach(entry => {
            const currentDate = moment(entry.Date).startOf('day').format('YYYY-MM-DD');
            const clockInTime = moment(entry.ClockInTime, 'HH:mm:ss');
            const clockOutTime = moment(entry.ClockOutTime, 'HH:mm:ss');
            const hoursWorked = moment.duration(clockOutTime.diff(clockInTime)).asHours();
            dateWiseHours[currentDate] += hoursWorked; // Accumulate hours worked for each date
        });

        // Send the total worked hours for each date as response
        res.status(200).json({ data: dateWiseHours });
    } catch (error) {
        console.error('Error calculating worked hours:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const viewAttendanceHistory = async (req,res) => {
    
}

const attendanceSummary = async (req,res) => {
    
}

const attendanceRegularization = async (req,res) => {
    
}

const attendanceAnalysis = async (req,res) => {
    
}

module.exports = {
    clockIn,
    clockOut,
    calculateWorkedHours,
    viewAttendanceHistory
}