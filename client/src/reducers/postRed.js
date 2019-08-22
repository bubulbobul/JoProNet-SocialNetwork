import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  UPDATE_LIKE,
  DELETE_POST,
  CLEAR_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "../actions/types";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  // console.log("posts reducer", payload);

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      };
    case CLEAR_POST:
      return {
        ...state,
        loading: false,
        // posts: [],
        post: null
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            comment => comment._id !== payload
          )
        },
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKE:
      const post = state.post
      if (payload.rmLike === true) {
        console.log(payload)
        return {
          ...state,
          post: {
            ...post,
            // likes: payload.likes
            likes: [...payload.likes.filter(like => like._id !== payload.postId)]
          }
        }
      } else {
        return {
          ...state,
          post: {
            ...post,
            likes: payload.likes
          }
        }
      };

    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === payload.postId
            ? {
              ...post,
              likes: payload.likes
            }
            : post
        ),
        loading: false
      };
    default:
      return state;
  }
};
