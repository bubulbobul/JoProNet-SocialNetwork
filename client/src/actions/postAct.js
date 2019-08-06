import axios from "axios";
import { setAlert } from "./alertAct";

import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from "./types";

// Get posts
export const getPostsRed = posts => {
  return {
    type: GET_POSTS,
    payload: posts
  };
};

export const getPostsError = error => {
  return {
    type: POST_ERROR,
    payload: {
      msg: error.response.statusText,
      status: error.response.status
    }
  };
};

export const getPostsAct = apiUrl => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/api/posts`)
      .then(response => {
        // console.log(response.data);
        dispatch(getPostsRed(response.data));
      })
      .catch(error => {
        console.error(error);
        console.error(error.response);
        dispatch(getPostsError(error.response));
        throw error;
      });
  };
};

// ADD LIKE
export const upDateLikeAct = (likes, postId) => {
  return {
    type: UPDATE_LIKES,
    payload: {
      postId,
      likes: likes
    }
  };
};

export const upDateLikeActError = error => {
  return {
    type: POST_ERROR,
    payload: {
      msg: error.response.statusText,
      status: error.response.status
    }
  };
};

export const addLikeAct = (apiUrl, postId) => {
  return dispatch => {
    return axios
      .put(`${apiUrl}/api/posts/like/${postId}`)
      .then(response => {
        console.log(response.data);
        dispatch(upDateLikeAct(response.data, postId));
      })
      .catch(error => {
        // console.error(error);
        // console.error(error.response);
        // dispatch(upDateLikeActError(error.response));
        throw error;
      });
  };
};

// REMOVE LIKE

export const rmLike = (likes, postId) => {
  return {
    type: UPDATE_LIKES,
    payload: {
      postId,
      likes: likes
    }
  };
};

export const removeLikeError = error => {
  return {
    type: POST_ERROR,
    payload: {
      msg: error.response.statusText,
      status: error.response.status
    }
  };
};

export const removeLikeAct = (apiUrl, postId) => {
  console.log("removeLikeAct", apiUrl, postId);
  return dispatch => {
    return axios
      .put(`${apiUrl}/api/posts/unlike/${postId}`)
      .then(response => {
        console.log(response.data);
        dispatch(rmLike(response.data, postId));
      })
      .catch(error => {
        // console.error(error);
        // console.error(error.response);
        dispatch(removeLikeError(error.response));
        throw error;
      });
  };
};
