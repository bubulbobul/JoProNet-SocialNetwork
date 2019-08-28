import { FETCH_CONFIG } from "../actions/types";

export default function getConfigReducer(state = [], action) {
  const { type, apiUrl } = action;
  switch (type) {
    case FETCH_CONFIG:
      return apiUrl;
    default:
      return state;
  }
}
