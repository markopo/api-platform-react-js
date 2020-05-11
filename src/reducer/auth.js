import {USER_LOGIN_FAILED, USER_LOGIN_HAS_TOKEN, USER_LOGIN_LOGOUT, USER_LOGIN_SUCCESS} from "../actions/constants";


export default (state = {
    error: null,
    token: null,
    userId: null,
    isAuthenticated: false
}, action) => {

    console.log('AUTH: ', action.type, state, action);

  switch (action.type) {

      case USER_LOGIN_SUCCESS:
          return {
              ...state,
              token: action.token,
              userId: action.userId,
              isAuthenticated: true,
              error: null
          };
      case USER_LOGIN_FAILED:
          return {
              ...state,
              error: action.error,
              token: null,
              userId: null,
              isAuthenticated: false
          };
      case USER_LOGIN_LOGOUT:
          return {
              ...state,
              error: null,
              token: null,
              userId: null,
              isAuthenticated: false
          };
      case USER_LOGIN_HAS_TOKEN:
          return {
              ...state,
              error: null,
              token: action.token,
              userId: null,
              isAuthenticated: true
          };

      default:
          return state;

  }
};