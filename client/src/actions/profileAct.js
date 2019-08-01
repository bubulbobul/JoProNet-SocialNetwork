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
    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, null, "error")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// To Create or update a profile
export const createProfileAct = (
  apiUrl,
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    console.log("formData from createProfileAct", formData);
    const res = await axios.post(`${apiUrl}/api/profile`, formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    if (edit) {
      dispatch(setAlert("Profile Updated Successfully", null, "success"));
    } else {
      dispatch(setAlert("Profile Created Successfully", null, "success"));
    }
    if (!edit) {
      setTimeout(() => history.push("/dashboard"), 7000);
    }
  } catch (err) {
    const errors = err.response.data.errors;
    // console.log(errors);
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, null, "error")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
