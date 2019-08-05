import axios from "axios";
import { setAlert } from "./alertAct";

import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_ALL_PROFILES,
  GET_REPOS
} from "./types";

// Fct to get the current users profile
export const getCurrentProfileAct = apiUrl => async dispatch => {
  // console.log(apiUrl);

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

// To Get all profiles
export const getAllProfilesAct = apiUrl => async dispatch => {
  // console.log(apiUrl);
  dispatch({
    type: CLEAR_PROFILE
  });

  try {
    const res = await axios.get(`${apiUrl}/api/profile`);

    dispatch({
      type: GET_ALL_PROFILES,
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

// To Get a profile by the user id
export const getProfileByTheUserIdAct = (apiUrl, userId) => async dispatch => {
  console.log(apiUrl, userId);

  try {
    const res = await axios.get(`${apiUrl}/api/profile/user/${userId}`);

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

// To Get Github repos
export const getGithubReposAct = (apiUrl, githubUsername) => async dispatch => {
  // console.log(apiUrl);

  try {
    const res = await axios.get(
      `${apiUrl}/api/profile/github/${githubUsername}`
    );

    dispatch({
      type: GET_REPOS,
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

    // console.log("formData from createProfileAct", formData);
    const res = await axios.post(`${apiUrl}/api/profile`, formData, config);

    console.log("createOrUpdateProfileAct", res.data);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    if (edit) {
      dispatch(
        setAlert(
          "Success",
          "Your profile has been updated successfully",
          "success"
        )
      );
    } else {
      dispatch(
        setAlert(
          "Success",
          "Your profile has been created successfully ",
          "success"
        )
      );
    }
    if (res.data) {
      setTimeout(() => history.push("/dashboard"), 3000);
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

    // console.log("formData from addExperienceAct", formData);
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
      setAlert(
        "Success",
        "Your experience has been added successfully",
        "success"
      )
    );

    if (res.data) {
      setTimeout(() => history.push("/dashboard"), 1000);
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
      setAlert(
        "Success",
        "Your education has been added successfully",
        "success"
      )
    );
    if (res.data) {
      setTimeout(() => history.push("/dashboard"), 1000);
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
    console.log(detailPage, company, id, history);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
    console.log(detailPage, company, id, history);
    dispatch(
      setAlert(
        "Experience Deleted",
        `Your experience with ${company} has been deleted successfully`,
        "success"
      )
    );
    console.log(detailPage, company, id, history);
    if (detailPage) {
      history.push(`/dashboard`);
    }
  } catch (err) {
    console.log(err.response);
    console.log(err);
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
export const deleteEducationAct = (
  apiUrl,
  id,
  school,
  history,
  detailPage
) => async dispatch => {
  try {
    const res = await axios.delete(`${apiUrl}/api/profile/education/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(
      setAlert(
        "Success",
        `Your education in ${school} has been deleted successfully`,
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
