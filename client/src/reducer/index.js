import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import postReducer from "./postReducer";
import commentReducer from "./CommentReducer";

export const reducers = combineReducers({authReducer,postReducer,commentReducer})