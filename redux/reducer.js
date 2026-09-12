import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from "./actions";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: "" };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload, error: "" };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
