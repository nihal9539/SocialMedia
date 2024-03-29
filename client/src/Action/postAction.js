import * as PostApi from "../api/postRequest"
export const getTimeLinePosts = (id) => async (dispatch) => {
    dispatch({ type: "RETREVING_START" })
    try {
        const data = await PostApi.getTimeLinePosts(id)

        dispatch({ type: "RETREVING_SUCCESS", data: data.data })
    } catch (error) {
        dispatch({ type: "RETREVING_FAIL" })
        console.log(error);

    }
}