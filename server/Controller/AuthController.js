import UserModel from "../Model/userModel.js";
import bcypt from "bcrypt"


// Register New User
export const registerUser = async(req,res)=>{
    const {username,password,firstname,lastname} = req.body;
    const salt = await bcypt.genSalt(10)
    const hashPassword =await  bcypt.hash(password,salt)
    const newUser = new UserModel({username,password:hashPassword,firstname,lastname})
    try {
        await newUser.save()
        res.status(200).json(newUser)
        
    } catch (error) {
        res.status(500).json({message:error.message})
        console.log(error);
    }

}

export const loginUser = async(req,res)=>{
    const {username,password} = req.body;

    try {
        const user  = await UserModel.findOne({username:username})
        if (user) {
            const validity = await bcypt.compare(password,user.password)
            validity ? res.status(200).json(user) : res.status(400).json("Wrong password")
        }else{
            res.status(404).json('user Not found')
        }
    } catch (error) {
        res.status(500).json({message:error.message})

    }
}