import { FETCH_CONFIG } from "../actions/types";

export default function getConfigReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CONFIG:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
