const commentReducer = (
  state = { comments: [null], loading: false, error: false, uploading: true },
  action
) => {
  switch (action.type) {
    // belongs to commentshare.jsx

    // belongs to comments.jsx
    case "COMMENT_START":
      return { ...state, loading: true, error: false, uploading: true };
    case "COMMENT_SUCCESS":
      return { ...state, comments: action.data, loading: false, error: false, uploading: false };
    case "COMMENT_FAIL":
      return { ...state, loading: false, error: true, uploading: false };
    default:
      return state;
  }
};

export default commentReducer;