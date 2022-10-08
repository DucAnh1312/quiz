import { combineReducers } from "redux";
import userReducer from "./userReducer";
import getQuestionPlayReducer from "./getQuestionPlayReducer";
import submitQuestionReducer from "./submitQuestionReducer"

const rootReducer = combineReducers({
  userReducer,
  getQuestionPlayReducer,
  submitQuestionReducer,
});

export default rootReducer;
