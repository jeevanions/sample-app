import Employee from "../models/employeeModel.js";
 
export const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getEmployeeById = async (req, res) => {
    try {
        const employees = await Employee.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(employees[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createEmployee = async (req, res) => {
    try {
        console.log("Before db call");

        await Employee.create(req.body);
        res.json({
            "message": "Employee Created"
        });
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message });
    }  
}
 
export const updateEmployee = async (req, res) => {
    try {
        await Employee.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Employee Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteEmployee = async (req, res) => {
    try {
        await Employee.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Employee Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}