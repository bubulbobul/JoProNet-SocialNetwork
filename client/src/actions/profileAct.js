import axios from "axios";
import { setAlert } from "./alertAct";

import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_ALL_PROFILES,
  GET_REPOS,
  GET_SINGLE_EXPERIENCE,
  GET_SINGLE_EDUCATION,
  CLEAR_GET_SINGLE_EXPERIENCE,
  CLEAR_GET_SINGLE_EDUCATION,
  EDIT_SINGLE_EXPERIENCE,
  EDIT_SINGLE_EDUCATION
} from "./types";

// Fct to get the current users profile
export const getCurrentProfileAct = apiUrl => async dispatch => {
  dispatch({
    type: CLEAR_GET_SINGLE_EXPERIENCE
  });
  dispatch({
    type: CLEAR_GET_SINGLE_EDUCATION
  });
  dispatch({
    type: CLEAR_PROFILE
  })

  try {
    const res = await axios.get(`${apiUrl}/api/profile/me`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    const msg = err.response.data.msg;
    const status = err.response.status;
    const statusText = err.response.statusText;

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg,
        status,
        statusText
      }
    });
  }
};

// To Get all profiles
export const getAllProfilesAct = apiUrl => async dispatch => {
  dispatch({
    type: CLEAR_PROFILE,
  });
  dispatch({
    type: CLEAR_GET_SINGLE_EXPERIENCE
  });
  dispatch({
    type: CLEAR_GET_SINGLE_EDUCATION
  });

  try {
    const res = await axios.get(`${apiUrl}/api/profile`);

    dispatch({
      type: GET_ALL_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR
    });
    throw err
  }
};

// To Get a profile by the user id
export const getProfileByTheUserIdAct = (apiUrl, userId) => async dispatch => {
  dispatch({
    type: CLEAR_PROFILE,
  });
  try {
    const res = await axios.get(`${apiUrl}/api/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR
    });
    throw err
  }
};

// To Get Github repos
export const getGithubReposAct = (apiUrl, githubUsername) => async dispatch => {

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
      type: PROFILE_ERROR
    });
    throw err
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

    const res = await axios.post(`${apiUrl}/api/profile`, formData, config);
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
      setTimeout(() => history.push("/dashboard"), 1000);
    }
  } catch (err) {

    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, null, "error")));
    }

    dispatch({
      type: PROFILE_ERROR
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

    const res = await axios.put(
      `${apiUrl}/api/profile/experience`,
      formData,
      config
    );

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
    console.error(err);

    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, null, "error")));
    }

    dispatch({
      type: PROFILE_ERROR
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

    const res = await axios.put(
      `${apiUrl}/api/profile/education`,
      formData,
      config
    );

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
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, null, "error")));
    }

    dispatch({
      type: PROFILE_ERROR
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
        `Your experience with ${company} has been deleted successfully`,
        "success"
      )
    );
    if (detailPage) {
      history.push(`/dashboard`);
    }
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR
    });
    throw err
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
      type: PROFILE_ERROR
    });
    throw err
  }
};

// Delete account and profile
export const deleteAccountAct = apiUrl => async dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      await axios.delete(`${apiUrl}/api/profile`);

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
        type: PROFILE_ERROR
      });
      throw err
    }
  }
};

// GET A SINGLE EXPERIENCE
export const getSingleExperienceAct = (apiUrl, expId) => async dispatch => {
  try {
    const res = await axios.get(`${apiUrl}/api/profile/experience/${expId}`);
    dispatch({
      type: GET_SINGLE_EXPERIENCE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR
    });
    throw err
  }
};

// EDIT A SINGLE EXPERIENCE
export const editSingleExperienceAct = (apiUrl, formData, expId, company) => async dispatch => {


  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.put(`${apiUrl}/api/profile/experience/${expId}`,
      formData,
      config
    );

    dispatch({
      type: EDIT_SINGLE_EXPERIENCE,
      payload: res.data
    });

    dispatch(
      setAlert(
        "Success",
        `Your experience with ${company} has been updated successfully`,
        "success"
      )
    );

  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, null, "error")));
    }

    dispatch({
      type: PROFILE_ERROR
    });
    throw err
  }
};


// GET A SINGLE EDUCATION
export const getSingleEducationAct = (apiUrl, eduId) => async dispatch => {
  try {
    const res = await axios.get(`${apiUrl}/api/profile/education/${eduId}`);

    dispatch({
      type: GET_SINGLE_EDUCATION,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR
    });
    throw err
  }
};

// EDIT A SINGLE EDUCATION
export const editSingleEducationAct = (apiUrl, formData, expId, school) => async dispatch => {


  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.put(`${apiUrl}/api/profile/education/${expId}`,
      formData,
      config
    );

    dispatch({
      type: EDIT_SINGLE_EDUCATION,
      payload: res.data
    });

    dispatch(
      setAlert(
        "Success",
        `Your education with ${school} has been updated successfully`,
        "success"
      )
    );

  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, null, "error")));
    }

    dispatch({
      type: PROFILE_ERROR
    });
    throw err
  }
};


