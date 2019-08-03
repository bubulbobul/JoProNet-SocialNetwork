import axios from "axios";
import { setAlert } from "./alertAct";

import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED
} from "./types";

// Fct to get the current users profile
export const getCurrentProfileAct = apiUrl => async dispatch => {
  // console.log(apiUrl);

  const headers = {
    "Content-Type": "application/json"
  };

  // console.log(headers);
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

// To Delete an EXPERIENCE
export const deleteExperienceAct = (
  apiUrl,
  id,
  company,
  history,
  detailPage
) => async dispatch => {
  try {
    const res = await axios.delete(`${apiUrl}/api/profile/experience/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(
      setAlert(
        "Experience Deleted",
        `Your experience with ${company} has been Deleted Successfully`,
        "success"
      )
    );

    if (detailPage) {
      history.push("/dashboard");
    }
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

// To Delete an EDUCATION
export const deleteEducationAct = (apiUrl, id, school) => async dispatch => {
  try {
    const res = await axios.delete(`${apiUrl}/api/profile/education/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(
      setAlert(
        "Education Deleted",
        `Your education in ${school} has been Deleted Successfully`,
        "success"
      )
    );
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

// Delete account and profile
export const deleteAccountAct = apiUrl => async dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      const res = await axios.delete(`${apiUrl}/api/profile`);

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(
        setAlert(
          "Account Deleted",
          `Your account has been permantry DELETED`,
          null
        )
      );
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status
        }
      });
    }
  }
};
