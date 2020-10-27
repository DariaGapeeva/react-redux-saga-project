import { POSTS_CREATE_POST } from "../redux/postsReduser";
import { appShowAlert } from "../redux/appReduser";

const forbidden = ["fuck", "php", "spam"];
export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return function (next) {
    return function (action) {
      if (action.type === POSTS_CREATE_POST) {
        const found = forbidden.filter((w) => action.payload.title.includes(w));
        if (found.length) {
          return dispatch(appShowAlert("введены запретные слова"));
        }
      }
      return next(action);
    };
  };
};
