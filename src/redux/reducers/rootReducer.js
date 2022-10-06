import { combineReducers } from "redux";
import userReducer from "./userReducer";
import getQuestionPlayReducer from "./getQuestionPlayReducer";

const rootReducer = combineReducers({
    userReducer,
    getQuestionPlayReducer
});

export default rootReducer;
