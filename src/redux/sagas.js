import { call, put, takeEvery } from "redux-saga/effects";
import { appHideLoader, appShowLoader } from "./appReduser";
import { POSTS_REQUEST_POSTS, POSTS_FETCH_POSTS } from "./postsReduser";

export function* sagaWatcher() {
  yield takeEvery(POSTS_REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  yield put(appShowLoader());
  const payload = yield call(getPosts);
  yield put({ type: POSTS_FETCH_POSTS, payload });
  yield put(appHideLoader());
}

async function getPosts() {
  const response = await fetch(
    "http://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return await response.json();
}
