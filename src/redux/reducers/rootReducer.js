import { combineReducers } from "redux";
import userReducer from "./userReducer";
import getQuestionPlayReducer from "./getQuestionPlayReducer";
import submitResultsReducer from "./getResultsReducer";

const rootReducer = combineReducers({
  userReducer,
  getQuestionPlayReducer,
  submitResultsReducer
});

export default rootReducer;
