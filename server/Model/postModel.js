import mongoose from "mongoose"

const postScheme = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: String,
    like: [],
    image: String

},
    {
        timestamps: true
    }
)

const PostModel =mongoose.model('Posts',postScheme) 
export default  PostModel