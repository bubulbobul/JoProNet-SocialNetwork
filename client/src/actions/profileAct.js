import axios from "axios";
import { setAlert } from "./alertAct";

import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from "./types";

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
export const createOrUpdateProfileAct = (
  apiUrl,
  formData,
  history,
  edit
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    console.log("formData from createProfileAct", formData);
    const res = await axios.post(`${apiUrl}/api/profile`, formData, config);

    console.log("createOrUpdateProfileAct", res.data);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    if (edit) {
      dispatch(
        setAlert("Your profile has been updated Successfully", null, "success")
      );
    } else {
      dispatch(
        setAlert("Your profile has been successfully created", null, "success")
      );
    }
    if (res.data) {
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

// To add an EXPERIENCE
export const addExperienceAct = (
  apiUrl,
  formData,
  history
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    console.log("formData from addExperienceAct", formData);
    const res = await axios.put(
      `${apiUrl}/api/profile/experience`,
      formData,
      config
    );

    console.log("res.data from addExperienceAct", res.data);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(
      setAlert("Your Experience has been updated Successfully", null, "success")
    );

    if (res.data) {
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

// To add an EDUCATION
export const addEducationAct = (
  apiUrl,
  formData,
  history
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    console.log("formData from addEducationAct", formData);
    const res = await axios.put(
      `${apiUrl}/api/profile/education`,
      formData,
      config
    );

    console.log("res.data from addEducationAct", res.data);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(
      setAlert("Your Experience has been updated Successfully", null, "success")
    );

    if (res.data) {
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
