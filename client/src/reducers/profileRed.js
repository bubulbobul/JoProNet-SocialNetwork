import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_ALL_PROFILES,
  GET_REPOS,
  GET_SINGLE_EDUCATION,
  CLEAR_GET_SINGLE_EDUCATION,
  GET_SINGLE_EXPERIENCE,
  CLEAR_GET_SINGLE_EXPERIENCE,
  EDIT_SINGLE_EXPERIENCE,
  EDIT_SINGLE_EDUCATION
} from "../actions/types";

const initialState = {
  profile: null,
  allProfiles: [],
  repos: [],
  profileLoading: true,
  error: {},
  hasProfile: false,
  hasUserProfile: false,
  experience: null,
  education: null,
  loading: true
};

// console.log("initialState", initialState);

export default (state = initialState, action) => {
  const { type, payload } = action;
  // console.log("PAYLOAD GET_PROFILE", payload);
  switch (type) {

    case GET_PROFILE:
    case UPDATE_PROFILE:
      // console.log("TYPE", type);
      if (payload === "") {
        return {
          ...state,
          profile: payload,
          profileLoading: false,
          hasProfile: false,
          hasUserProfile: false
        };
      } else {
        return {
          ...state,
          profile: payload,
          profileLoading: false,
          hasProfile: true,
          hasUserProfile: true
        };
      }

    case GET_SINGLE_EXPERIENCE:
    case EDIT_SINGLE_EXPERIENCE:
      return {
        ...state,
        experience: payload,
        profileLoading: false,
        loading: false
      }
    case CLEAR_GET_SINGLE_EXPERIENCE:
      return {
        ...state,
        experience: null
      }
    case GET_SINGLE_EDUCATION:
    case EDIT_SINGLE_EDUCATION:
      return {
        ...state,
        education: payload,
        profileLoading: false,
        loading: false
      }
    case CLEAR_GET_SINGLE_EDUCATION:
      return {
        ...state,
        education: null
      }
    case GET_ALL_PROFILES:
      return {
        ...state,
        allProfiles: payload,
        profileLoading: false
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
        profileLoading: false,
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
        loading: false,
        // profileLoading: false
      };
    default:
      return state;
  }
};
