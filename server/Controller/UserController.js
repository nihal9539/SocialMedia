import UserModel from "../Model/userModel.js";
import bcypt from "bcrypt"
import jwt from "jsonwebtoken";



export const getUser = async (req, res) => {


    const id = req.params.id
    console.log(id);
    try {
        const user = await UserModel.findById(id)
        if (user) {
            const { password, ...otherDetails } = user._doc
            res.status(200).json(otherDetails)
        } else {
            res.status(404).json("user not exist")

        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const getAllUser = async (req, res) => {

    try {
        console.log("hi");
      let users = await UserModel.find();
      users = users.map((user)=>{
        const {password, ...otherDetails} = user._doc
        return otherDetails
      })
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  };
//update a user
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { _id, currentUserAdminStatus, password } = req.body;
    if (id === _id) {

        try {
            if (password) {
                const salt = await bcypt.genSalt(10)
                req.body.password = await bcypt.hash(password, salt)
                console.log(req.body);
            }
            const user = await UserModel.findByIdAndUpdate(id, zz, { new: true })

            const token = jwt.sign({
                username: user.username,
                id: user
            },
                process.env.JWT_KEY,
                { expireIn: "1h" }

            )
            res.status(200).json({ user, token })

        } catch (error) {
            res.status(500).json(error.message)
        }

    } else {
        res.status(403).json("Access denied you can only update your own profile")
    }
}
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const { currentUserId, currentUserAdminStatus } = req.body;

    if (id === currentUserId || currentUserAdminStatus) {

        try {

            await UserModel.findByIdAndDelete(id)
            res.status(200).json("user deleted successfully")

        } catch (error) {
            res.status(500).json(error.message)
        }

    } else {
        res.status(403).json("Access denied you can only delete your own profile")
    }
}
//Follow a user 
export const followUser = async (req, res) => {
    const { id } = req.params;
    const { _id } = req.body;


    if (id === _id) {

        res.status(403).json("Action forhidden")


    } else {
        try {

            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(_id)

            if (!followUser.followers.includes(_id)) {
                await followUser.updateOne({ $push: { followers: _id } })
                await followingUser.updateOne({ $push: { following: id } })
                return res.status(200).json('user followed')
            } else {
                return res.status(409).json(' user is already following')
            }

        } catch (error) {
            res.status(500).json(erroe.messager)
        }
    }
}
//Unfollow User a user 
export const unfollowUser = async (req, res) => {
    const { id } = req.params;
    const { _id } = req.body;


    if (id === _id) {

        res.status(403).json("Action forhidden")


    } else {
        try {

            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(_id)

            if (followUser.followers.includes(_id)) {
                await followUser.updateOne({ $pull: { followers: _id } })
                await followingUser.updateOne({ $pull: { following: id } })
                return res.status(200).json('user unfollowed')
            } else {
                return res.status(409).json(' user is not followed by You')
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }
}
