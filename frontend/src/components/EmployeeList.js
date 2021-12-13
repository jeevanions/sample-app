import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const EmployeeList = () => {
    const [employees, setEmployee] = useState([]);
 
    useEffect(() => {
        getEmployees();
    }, []);
 
    const getEmployees = async () => {
        const response = await axios.get('/employees');
        setEmployee(response.data);
    }
 
    const deleteEmployee = async (id) => {
        await axios.delete(`/employees/${id}`);
        getEmployees();
    }
 
    return (
        <div>
            <h1>Jeeva</h1>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { employees.map((employee, index) => (
                        <tr key={ employee.id }>
                            <td>{ index + 1 }</td>
                            <td>{ employee.firstName }</td>
                            <td>{ employee.lastName }</td>
                            <td>{ employee.salary }</td>
                            <td>
                                <Link to={`/edit/${employee.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteEmployee(employee.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default EmployeeList