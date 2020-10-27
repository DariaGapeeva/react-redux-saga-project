import { appShowLoader, appHideLoader, appShowAlert } from "./appReduser";

export const POSTS_CREATE_POST = "POSTS_CREATE_POST";
export const POSTS_FETCH_POSTS = "POSTS_FETCH_POSTS";
export const POSTS_REQUEST_POSTS = "POSTS_REQUEST_POSTS";

const initialState = {
  posts: [],
  fetchedPosts: [],
};

export const postsReduser = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case POSTS_FETCH_POSTS:
      return {
        ...state,
        fetchedPosts: action.payload,
      };
    default:
      return state;
  }
};

export const postsCreatePost = (post) => ({
  type: POSTS_CREATE_POST,
  payload: post,
});

export const fetchPosts = (posts) => {
  return { type: POSTS_REQUEST_POSTS };
  //   return async (dispatch) => {
  //     try {
  //       dispatch(appShowLoader());
  //       const response = await fetch(
  //         "http://jsonplaceholder.typicode.com/posts?_limit=5"
  //       );
  //       const json = await response.json();
  //       setTimeout(() => {
  //         dispatch({ type: POSTS_FETCH_POSTS, payload: json });
  //         dispatch(appHideLoader());
  //       }, 1000);
  //     } catch (e) {
  //       dispatch(appShowAlert("Ошибка загрузки данных"));
  //       dispatch(appHideLoader());
  //     }
  //   };
};
