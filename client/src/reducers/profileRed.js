import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repose: [],
  loading: true,
  error: {},
  hasProfile: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
        hasProfile: true
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        hasProfile: null
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      };
    default:
      return state;
  }
};
