import express from "express";
import db from "./config/database.js";
import employeeRoutes from "./routes/index.js";
import cors from "cors";

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8001;
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/employees', employeeRoutes);
 
app.listen(PORT,HOST, () => console.log('Server running at port 8001'));
