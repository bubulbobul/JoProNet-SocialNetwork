import axios from "axios";
import { FETCH_CONFIG } from "./types";

import setAuthToken from "../utils/setAuthToken";
import { loadUser } from "./authAct";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const apiUrl = `${window.location.protocol}//${
  window.location.host
  }/config/config.json`;

export const getAPIActData = apiUrl => {
  return {
    type: FETCH_CONFIG,
    apiUrl
  };
};

export const getAPIAct = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        dispatch(getAPIActData(response.data));
        dispatch(loadUser(response.data.apiUrl));
      })
      .catch(error => {
        throw error;
      });
  };
};
