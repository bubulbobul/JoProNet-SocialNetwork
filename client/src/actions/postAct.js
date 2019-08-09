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
    dispatch({
      type: CLEAR_POST
    });
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
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
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
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
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
    console.error(error);
    const errors = error.response.data.errors;
    // console.log(errors);
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, null, "error")));
    }
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
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

export const getPostError = error => {
  return {
    type: POST_ERROR,
    payload: {
      msg: error.response.statusText,
      status: error.response.status
    }
  };
};

export const getPostAct = (apiUrl, postId) => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/api/posts/${postId}`)
      .then(response => {
        // console.log(response.data);
        dispatch(getPostRed(response.data));
      })
      .catch(error => {
        console.error(error);
        console.error(error.response);
        dispatch(getPostsError(error.response));
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
    console.log(apiUrl, postId, formData);
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
    console.error(error);
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, null, "error")));
    }
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};

// Delete COMMENT
export const deleteCommentAct = (
  apiUrl,
  postId,
  commentId
) => async dispatch => {
  console.log(apiUrl, postId, commentId);
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
    console.error(error);
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, null, "error")));
    }
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};