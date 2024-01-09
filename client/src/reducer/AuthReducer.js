const authReducer =
    (state = { authData: null, loading: false, error: false }, action) => {
        console.log("Action received in Auth Reducer", action);
        switch (action.type) {
            case "AUTH_START":
                return { ...state, loading: true, error: false }
            case 'AUTH_SUCESS':
                console.log(action);
                localStorage.setItem('profile', JSON.stringify({...action?.data}));
                return { ...state, authData: action.data, loading: false, error: false }
            case 'AUTH_FAIL':
                return { ...state, loading: false, error: true }
            default:
                return state
        }
    }

    export default authReducer