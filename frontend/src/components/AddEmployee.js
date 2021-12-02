import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import configData from "../frontend.config.json";

const AddEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [salary, setSalary] = useState('');

    const navigate = useNavigate();
 
    const saveEmployee = async (e) => {
        e.preventDefault();
        await axios.post(configData.API_BASE_URL + '/employees',{
            firstName: firstName,
            lastName: lastName,
            salary:salary
        });
        navigate("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveEmployee }>
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddEmployee