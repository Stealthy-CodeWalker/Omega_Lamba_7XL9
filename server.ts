import express, {Request, Response} from 'express'
import {call} from './routes/call'

require('dotenv').config()
const app = express()

app.get('/call',async (req:Request,res:Response)=>{
    res.send(await call());
})

app.get('/',(req:Request,res:Response)=>{
    res.send("Hello World")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})