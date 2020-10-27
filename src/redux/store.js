import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { postsReduser } from "./postsReduser";
import thunk from "redux-thunk";
import { appReduser } from "./appReduser";
import { forbiddenWordsMiddleware } from "../redux/middleware";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./sagas";

const rootReduser = combineReducers({
  posts: postsReduser,
  app: appReduser,
});

const saga = createSagaMiddleware();

const store = createStore(
  rootReduser,
  compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(sagaWatcher);

export default store;
