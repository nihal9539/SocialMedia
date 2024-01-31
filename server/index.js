import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import AuthRoute from "./Routes/AuthRoute.js"
import UserRoute from "./Routes/UserRoute.js"
import PostRoute from "./Routes/PostRoute.js"
import UploadRoute from "./Routes/uploadRoute.js"
import ChatRoute from "./Routes/ChatRoute.js"

// Router


const app = express()

//serch images for public
app.use(express.static('public'))
app.use('/images',express.static("images"))
// Middeleware
app.use(cors())
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
app.use('/post',PostRoute)
app.use('/upload',UploadRoute)
app.use('/chat',ChatRoute)