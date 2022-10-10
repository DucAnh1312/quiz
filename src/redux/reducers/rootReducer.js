import { combineReducers } from "redux";
import userReducer from "./userReducer";
import getQuestionPlayReducer from "./getQuestionPlayReducer";
import submitResultsReducer from "./getResultsReducer";
import getQuestionIdReducer from "./getDelQuestionId";

const rootReducer = combineReducers({
  userReducer,
  getQuestionPlayReducer,
  submitResultsReducer,
  getQuestionIdReducer
});

export default rootReducer;
