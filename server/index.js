import express from 'express';
import Conncetion from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = 8000;
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

app.use(cors)
app.use('/', router)
Conncetion(username,password);

app.listen(port,()=>console.log(`Server is running at port ${port}`));

DefaultData();