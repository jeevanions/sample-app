import { Sequelize } from "sequelize";
import  {}  from "dotenv/config";

console.log(process.env.DB_NAME);
const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER_NAME , process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
});

export default db;