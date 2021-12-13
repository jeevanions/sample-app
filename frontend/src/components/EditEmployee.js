/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    const updateEmployee = async (e) => {
        e.preventDefault();
        await axios.patch(`/employees/${id}`,{
            firstName: firstName,
            lastName: lastName,
            salary:salary
        });
        navigate("/");
    }
 
    useEffect(() => {
        getEmployeeById();
    }, []);
 
    const getEmployeeById = async () => {
        const response = await axios.get(`/employees/${id}`);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setSalary(response.data.salary);
    }
 
    return (
        <div>
            <form onSubmit={ updateEmployee }>
                <div className="field">
                    <label className="label">First Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="First Name"
                        value={ firstName }
                        onChange={ (e) => setFirstName(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Last Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Last Name"
                        value={ lastName }
                        onChange={ (e) => setLastName(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Salary</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Salary"
                        value={ salary }
                        onChange={ (e) => setSalary(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditEmployee