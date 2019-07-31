import { combineReducers } from "redux";

import apiUrl from "./getAPIRed";
import alert from "./alertRed";
import auth from "./authRed";

export default combineReducers({
  alert,
  apiUrl,
  auth
});
