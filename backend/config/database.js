import { Sequelize } from "sequelize";
 
const db = new Sequelize('employee', 'admin', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;