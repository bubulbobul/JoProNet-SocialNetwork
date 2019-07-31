import axios from "axios";
import { FETCH_CONFIG } from "./types";

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
        // console.log(response.data);
        dispatch(getAPIActData(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
