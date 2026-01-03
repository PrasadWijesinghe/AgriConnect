import express from "express";
import 'dotenv/config';
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRoutes from './routes/authRoutes.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(cors({credentials: true}));
app.use(cookieParser());
app.use('/api/auth', authRoutes);

app.listen(port, ()=> console.log(`Server started on PORT: ${port}`))