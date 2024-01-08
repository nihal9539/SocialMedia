import UserModel from "../Model/userModel.js";
import bcypt from "bcrypt"

export const getUser = async (req, res) => {


    const id = req.params.id
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

//update a user
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { currentUserId, currentUserAdminStatus, password } = req.body;
    if (id === currentUserId || currentUserAdminStatus) {

        try {
            if (password) {
                const salt = await bcypt.genSalt(10)
                req.body.password = await bcypt.hash(password, salt)
                console.log(req.body);
            }
            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
            res.status(200).json(user)

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
    const { currentUserId } = req.body;


    if (id === currentUserId) {

        res.status(403).json("Action forhidden")


    } else {
        try {

          const followUser =await UserModel.findById(id)
          const followingUser =await UserModel.findById(currentUserId)

          if (!followUser.followers.includes(currentUserId)) {
            await followUser.updateOne({$push:{followers:currentUserId}})
            await followingUser.updateOne({$push:{following:id}})
            return res.status(409).json('user followed')
          }else{
            return res.status(409).json(' user is already following')
          }

        } catch (error) {
            res.status(500).json(error)
        }
    }
}
//Unfollow User a user 
export const unfollowUser = async (req, res) => {
    const { id } = req.params;
    const { currentUserId } = req.body;


    if (id === currentUserId) {

        res.status(403).json("Action forhidden")


    } else {
        try {

          const followUser =await UserModel.findById(id)
          const followingUser =await UserModel.findById(currentUserId)

          if (followUser.followers.includes(currentUserId)) {
            await followUser.updateOne({$pull:{followers:currentUserId}})
            await followingUser.updateOne({$pull:{following:id}})
            return res.status(409).json('user unfollowed')
          }else{
            return res.status(409).json(' user is not followed by You')
          }

        } catch (error) {
            res.status(500).json(error)
        }
    }
}
