import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import AuthRoute from "./Routes/AuthRoute.js"
import UserRoute from "./Routes/UserRoute.js"

// Router


const app = express()
// Middeleware
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

dotenv.config()
mongoose.connect(process.env.MONGO_DB)
.then(()=>{app.listen(process.env.PORT,()=>{
    console.log(`port connect at ${process.env.PORT}`);
})})
.catch((err)=>{
    console.log(err.message);
})

//differant routes

app.use('/auth',AuthRoute)
app.use('/user',UserRoute)