// ** Reducers Imports
import layout from "./layout";
import navbar from "./navbar";
import trainMonth from "./trainMonth";
import calendar from "@src/views/calendar/store";
import content from "@src/views/contents/usedContents/store";

import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
const rootReducer = combineReducers({
  user: userReducer,
  navbar,
  layout,
  trainMonth,
  calendar,
  content,
});

export default rootReducer;
