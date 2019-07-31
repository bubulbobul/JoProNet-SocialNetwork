import { FETCH_CONFIG } from "./types";

export const getAPIAct = api => dispatch => {
  console.log("setAlert fct", api);
  dispatch({
    type: FETCH_CONFIG,
    payload: api
  });
};
