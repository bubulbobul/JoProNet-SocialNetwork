import { combineReducers } from "redux";
import api from "./getConfigRef";

import alert from "./alertRed";

export default combineReducers({
  alert,
  api
});
