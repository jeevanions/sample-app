import { Sequelize } from "sequelize";
import { DotEnv } from "dotenv" 

const config = DotEnv.config();

const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER_NAME , process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
});
 
export default db;