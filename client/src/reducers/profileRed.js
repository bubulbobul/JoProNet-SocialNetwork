import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_ALL_PROFILES,
  GET_REPOS
} from "../actions/types";

const initialState = {
  profile: null,
  allProfiles: [],
  repos: [],
  loading: true,
  error: {},
  hasProfile: null,
  experiences: null,
  educations: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log("PAYLOAD GET_PROFILE", payload);
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
    case GET_ALL_PROFILES:
      return {
        ...state,
        allProfiles: payload,
        loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false
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
