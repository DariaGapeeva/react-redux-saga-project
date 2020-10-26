import { createStore, combineReducers, compose } from "redux";
import { postsReduser } from "./postsReduser";

const rootReduser = combineReducers({
  posts: postsReduser,
});

const store = createStore(
  rootReduser,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
