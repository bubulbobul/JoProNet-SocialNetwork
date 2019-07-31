import axios from "axios";
import { setAlert } from "./alertAct";

import { GET_PROFILE, PROFILE_ERROR } from "./types";

// Fct to get the current users profile
export const getCurrentProfileAct = apiUrl => async dispatch => {
  console.log(apiUrl);

  const headers = {
    "Content-Type": "application/json"
  };

  console.log(headers);
  try {
    const res = await axios.get(`${apiUrl}/api/profile/me`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
