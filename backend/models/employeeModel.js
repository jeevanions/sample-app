import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Employee = db.define('employee',{
    firstName:{
        type: DataTypes.STRING
    },
    lastName:{
        type: DataTypes.STRING
    },
    salary:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});
 
export default Employee;