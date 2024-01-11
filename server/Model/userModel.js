import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        dafault: false
    },
    profilePicture: {
        type: String,

    },
    coverPicture: String,
    about: String,
    livesIn: String,
    worksAt: String,
    relationship: String,
    country: String,
    followers: [],
    following: []
},
    { timestamps: true }
)

const UserModel = mongoose.model('user',UserSchema);

export default UserModel