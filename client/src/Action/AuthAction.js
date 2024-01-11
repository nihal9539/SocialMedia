import * as AuthAPI from "../api/AuthRequest"

export const login = (formData) => async (dispatch) => {
    const { data } = await AuthAPI.login(formData)
      dispatch({type:'AUTH_START'});
      try {
          dispatch({type:'AUTH_SUCESS',data:data});
        } catch (error) {
            console.log(error);
            dispatch({type:'AUTH_FAIL'});
        }
}
export const signup = (formData) => async (dispatch) => {
      dispatch({type:'AUTH_START'});
      try {
          const { data } = await AuthAPI.signup(formData)
          dispatch({type:'AUTH_SUCESS'});
        } catch (error) {
            console.log(error);
            dispatch({type:'AUTH_FAIL'});
        }
}
export const logout = ()=> async(dispatch)=>{
    dispatch({type:"LOG_OUT"})
}