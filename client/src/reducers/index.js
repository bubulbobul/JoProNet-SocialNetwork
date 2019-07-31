import { combineReducers } from "redux";

import apiUrl from "./getAPIRed";
import alert from "./alertRed";

export default combineReducers({
  alert,
  apiUrl
});
