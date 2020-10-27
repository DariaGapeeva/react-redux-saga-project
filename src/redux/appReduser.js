const APP_SHOW_LOADER = "APP_SHOW_LOADER";
const APP_HIDE_LOADER = "APP_HIDE_LOADER";
const APP_SHOW_ALERT = "APP_SHOW_ALERT";
const APP_HIDE_ALERT = "APP_HIDE_ALERT";

const initialState = {
  loading: false,
  alert: null,
};

export const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case APP_SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case APP_HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    case APP_SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case APP_HIDE_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};

export const appShowLoader = () => ({ type: APP_SHOW_LOADER });
export const appHideLoader = () => ({ type: APP_HIDE_LOADER });
export const appShowAlert = (message) => {
  return (dispatch) => {
    dispatch({ type: APP_SHOW_ALERT, payload: message });
    setTimeout(() => {
      dispatch({ type: APP_HIDE_ALERT });
    }, 2000);
  };
};
export const appHideAlert = () => ({ type: APP_HIDE_ALERT });
