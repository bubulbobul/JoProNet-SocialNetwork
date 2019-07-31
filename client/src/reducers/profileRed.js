import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

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
    default:
      return state;
  }
};
