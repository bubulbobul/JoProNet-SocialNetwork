import axios from "axios";
import { setAlert } from "./alertAct";

import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  CLEAR_POST
} from "./types";

// Get posts
export const getPostsRed = posts => {
  return {
    type: GET_POSTS,
    payload: posts
  };
};

export const getPostsError = () => {
  return {
    type: POST_ERROR
  };
};

export const getPostsAct = apiUrl => {
  return dispatch => {
    dispatch({
      type: CLEAR_POST
    });
    return axios
      .get(`${apiUrl}/api/posts`)
      .then(response => {
        dispatch(getPostsRed(response.data));
      })
      .catch(error => {
        dispatch(getPostsError());
        throw error;
      });
  };
};

// Get all posts
export const getAllPostsAct = apiUrl => async dispatch => {
  dispatch({
    type: CLEAR_POST
  });

  try {
    const res = await axios.get(`${apiUrl}/api/posts`);

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR
    });
    throw error;
  }
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

export const upDateLikeActError = () => {
  return {
    type: POST_ERROR
  };
};

export const addLikeAct = (apiUrl, postId) => {
  return dispatch => {
    return axios
      .put(`${apiUrl}/api/posts/like/${postId}`)
      .then(response => {
        dispatch(upDateLikeAct(response.data, postId));
      })
      .catch(err => {
        const error = err.response.data;
        if (err) {
          dispatch(setAlert(error.msg, null, "error"));
        }
        dispatch(upDateLikeActError());
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

export const removeLikeError = () => {
  return {
    type: POST_ERROR
  };
};

export const removeLikeAct = (apiUrl, postId) => {
  return dispatch => {
    return axios
      .put(`${apiUrl}/api/posts/unlike/${postId}`)
      .then(response => {
        dispatch(rmLike(response.data, postId));
      })
      .catch(error => {
        dispatch(removeLikeError());
        throw error;
      });
  };
};

// Delete post
export const deletePostAct = (apiUrl, postId, postName) => async dispatch => {
  try {
    await axios.delete(`${apiUrl}/api/posts/${postId}`);

    dispatch({
      type: DELETE_POST,
      payload: postId
    });

    dispatch(
      setAlert(
        "Posts Deleted",
        `Your post ${postName} has been deleted successfully`,
        "success"
      )
    );
  } catch (error) {
    dispatch({
      type: POST_ERROR
    });
  }
};

// Add post
export const addPostAct = (apiUrl, formData) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post(`${apiUrl}/api/posts/`, formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data
    });

    dispatch(
      setAlert(
        "Post Added",
        `Your post ${formData.title} has been added successfully`,
        "success"
      )
    );
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, null, "error")));
    }
    dispatch({
      type: POST_ERROR
    });
  }
};

// Get post
export const getPostRed = post => {
  return {
    type: GET_POST,
    payload: post
  };
};

export const getPostError = () => {
  return {
    type: POST_ERROR
  };
};

export const getPostAct = (apiUrl, postId) => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/api/posts/${postId}`)
      .then(response => {
        dispatch(getPostRed(response.data));
      })
      .catch(error => {
        dispatch(getPostsError());
        throw error;
      });
  };
};

// Add COMMENT
export const addCommentAct = (apiUrl, postId, formData) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post(
      `${apiUrl}/api/posts/comment/${postId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(
      setAlert(
        "Comment Added",
        `Your comment has been added successfully`,
        "success"
      )
    );
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, null, "error")));
    }
    dispatch({
      type: POST_ERROR
    });
  }
};

// Delete COMMENT
export const deleteCommentAct = (
  apiUrl,
  postId,
  commentId
) => async dispatch => {
  try {
    await axios.delete(`${apiUrl}/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    dispatch(
      setAlert(
        "Comment Removed",
        `Your comment has been removed successfully`,
        "success"
      )
    );
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, null, "error")));
    }
    dispatch({
      type: POST_ERROR
    });
  }
};
