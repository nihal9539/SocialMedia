import * as CommentApi from "../api/CommentRequest"
export const getComment = (data) => async (dispatch) => {
    dispatch({ type: "COMMENT_START" })
    try {
        const datas = await CommentApi.getComments(data)
        console.log(datas);

        dispatch({ type: "COMMENT_SUCCESS", data: datas.data })
    } catch (error) {
        dispatch({ type: "COMMENT_FAIL" })
        console.log(error);

    }
}

export const createComment = (data) => async (dispatch) => {
    console.log(data);
    dispatch({ type: "COMMENT_START" })
    try {
        const newComment = await CommentApi.createComment(data)
        console.log(newComment.data);
        dispatch({ type: "COMMENT_SUCCESS" ,data:newComment.data})
    } catch (error) {
        console.log(error);
        dispatch({ type: "COMMENT_FAIL" })
    }
}