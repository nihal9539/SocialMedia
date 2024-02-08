import * as CommentApi from "../api/CommentRequest"
export const getComment = (data) => async (dispatch) => {
    dispatch({ type: "COMMENT_START" })
    try {
        const datas = await CommentApi.getComments(data)
        dispatch({ type: "COMMENT_SUCCESS", data: datas.data })
    } catch (error) {
        dispatch({ type: "COMMENT_FAIL" ,data:error })
        console.log(error);

    }
}

export const createComment = (data) => async (dispatch) => {

    dispatch({ type: "ADD_COMMENT_START" })
    try {
        const newComment = await CommentApi.createComment(data)

        dispatch({ type: "ADD_COMMENT_SUCCESS" ,data:newComment.data})
    } catch (error) {
        console.log(error);
        dispatch({ type: "ADD_COMMENT_FAILURE" ,data:error})
    }
}