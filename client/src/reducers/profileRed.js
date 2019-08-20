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
  profileLoading: true,
  profileLoading1: true,
  error: {},
  hasProfile: null,
  experiences: null,
  educations: null
};

// console.log("initialState", initialState);

export default (state = initialState, action) => {
  const { type, payload } = action;
  // console.log("PAYLOAD GET_PROFILE", payload);
  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      // console.log("TYPE", type);
      return {
        ...state,
        profile: payload,
        profileLoading: false,
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
        // allProfiles: [],
        repos: [],
        loading: false
      };
    default:
      return state;
  }
};
