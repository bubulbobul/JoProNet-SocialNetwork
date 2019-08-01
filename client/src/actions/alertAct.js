import uuid from "uuid";

import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (
  msgHeader,
  msgContent,
  alertType,
  timeout = 5000
) => dispatch => {
  const id = uuid.v4();

  console.log("setAlert fct", msgHeader, msgContent, alertType);
  dispatch({
    type: SET_ALERT,
    payload: {
      msgHeader,
      msgContent,
      alertType,
      id
    }
  });

  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id
      }),
    timeout
  );
};
