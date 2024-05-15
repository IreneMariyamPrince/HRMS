import { Employee } from "../types/Employee";
import { BASE_URL } from "./Api";
import axios from "axios";

const employerApi = {
  async fetchEmployees() {
    try {
      const response = await axios.get(`${BASE_URL}/employees`);
      return response.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  },

  async fetchEmployee(id: number) {
    try {
      const response = await axios.get(`${BASE_URL}/employees/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching employee:", error);
      throw error;
    }
  },

  async updateEmployee(id: number, updatedEmployee: Employee) {
    try {
      const response = await axios.put(`${BASE_URL}/employees/${id}`, updatedEmployee);
      return response.data;
    } catch (error) {
      console.error("Error updating employee:", error);
      throw error;
    }
  },
 

  async deleteEmployee(id: number) {
    try {
      const response = await axios.delete(`${BASE_URL}/employees/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting employee:", error);
      throw error;
    }
  }
};

export default employerApi;
