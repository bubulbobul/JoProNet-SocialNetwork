import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repose: [],
  loading: true,
  error: {},
  hasProfile: null,
  experiences: null,
  educations: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  // console.log("PAYLOAD GET_PROFILE", payload);
  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
        hasProfile: true,
        experiences: payload.experience,
        educations: payload.education
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
        experience: null,
        education: null,
        hasProfile: null,
        repos: [],
        loading: false
      };
    default:
      return state;
  }
};
