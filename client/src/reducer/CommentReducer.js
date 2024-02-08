const commentReducer = (
  state = { comments: [], loading: false, error: false, },
  action
) => {
  // console.log(action);
  console.log(state.comments);
  switch (action.type) {
    case "ADD_COMMENT_START":
      return {
        ...state,
        loading: true,
        error: null
      };
      case "ADD_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        comments: [...state.comments, action.data],
        error: null
      };
      case "ADD_COMMENT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.data
      };

    case "COMMENT_START":
      return { ...state, loading: true, error: false,  };
    case "COMMENT_SUCCESS":
      return { ...state, comments: action.data, loading: false, error: false};
    case "COMMENT_FAIL":
      return { ...state, loading: false, error: true, };
    default:
      return state;
  }
};

export default commentReducer;