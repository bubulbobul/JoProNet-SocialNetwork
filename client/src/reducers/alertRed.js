import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, action.payload];

    // Remove a specific ALERT by its ID
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
};
