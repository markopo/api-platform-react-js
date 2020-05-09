import {USER_LOGIN_FAILED, USER_LOGIN_SUCCESS} from "../actions/constants";


export default (state = {
    error: null,
    token: null,
    userId: null
}, action) => {

  switch (action.type) {

      case USER_LOGIN_SUCCESS:
          return {
              ...state,
              token: action.token,
              userId: action.userId,
              error: null
          };
      case USER_LOGIN_FAILED:
          return {
              ...state,
              error: action.error,
              token: null,
              userId: null
          };

      default:
          return state;

  }
};