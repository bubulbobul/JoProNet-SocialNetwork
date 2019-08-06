import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST
} from "../actions/types";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log("posts reducer", payload);

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKES:
      // console.log("state.poooooooooooooosts", state.posts);
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
