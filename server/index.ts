import express from "express"
import cors from 'cors';
import dotenv from 'dotenv'
const initializeDb = require('./utils/database')
const Routes = require('./routes/index')
const app = express();
initializeDb()
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,PUT,PATCH,POST,DELETE',
    credentials: true,
}))
dotenv.config();
app.use(express.json())
app.use('/', Routes)
app.listen(3001, () => {
    console.log(`Server is running in PORT 3001`);
});






