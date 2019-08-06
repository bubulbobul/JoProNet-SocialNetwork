import { combineReducers } from "redux";

import apiUrl from "./getAPIRed";
import alert from "./alertRed";
import auth from "./authRed";
import profile from "./profileRed";
import post from "./postRed";

export default combineReducers({
  apiUrl,
  alert,
  auth,
  profile,
  post
});
