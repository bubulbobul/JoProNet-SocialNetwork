import uuid from "uuid";

import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (
  msgHeader,
  msgContent,
  alertType,
  timeout = 3000
) => dispatch => {
  const id = uuid.v4();

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
