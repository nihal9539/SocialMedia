import *  as UploadApi from "../api/uploadRequest.js"
export const uploadImage = (data) => async (dispatch) => {
    try {
        console.log("start");
        await UploadApi.uploadImage(data)
    } catch (error) {
        console.log(error);
    }
}
export const uploadPost = (data) => async (dispatch) => {
    dispatch({ type: "UPLOAD_START" })
    try {
        const newPost = await UploadApi.uploadPost(data)
        console.log(newPost);
        dispatch({ type: "UPLOAD_SUCCESS" ,data:newPost.data})
    } catch (error) {
        console.log(error);
        dispatch({ type: "UPLOAD_FAIL" })
    }
}