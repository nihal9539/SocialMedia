import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const secret = process.env.JWT_SECRET;
const authMiddleWare = async (req,res,next)=>{
    try {
        const token = req.headers.Authrization.split("")[1]
      
        if (token) {
            const decode = jwt.verify(token,secret)
 
            req.body._id = decode?.id;
        }
        next();
        
    } catch (error) {
        console.log(error.message);
    }
}
export default authMiddleWare