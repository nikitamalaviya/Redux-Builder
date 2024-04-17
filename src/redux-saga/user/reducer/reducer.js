
import {
    DELETE_USER_ERROR,
    DELETE_USER_PENDING,
    DELETE_USER_SUCCESS,
    GET_USER_ERROR,
    GET_USER_PENDING,
    GET_USER_SUCCESS,
    POST_USER_ERROR,
    POST_USER_PENDING,
    POST_USER_SUCCESS,
    UPDATE_USER_ERROR,
    UPDATE_USER_PENDING,
    UPDATE_USER_SUCCESS,
  } from "../action/action";
  
  let initialState = {
    user: [],
  
    //status
    isLoading: false,
    isError: null,
  };
  
  let userReducer = (state = initialState, action) => {
    console.log(action, "action from reducer");
    switch (action.type) {
      //get api
      case GET_USER_PENDING: {
        return {
          isLoading: true,
          ...state,
        };
      }
      case GET_USER_SUCCESS: {
        return {
          isLoading: false,
          user: action.data,
        };
      }
  
      case GET_USER_ERROR: {
        return {
          ...state,
          isError: action.data,
        };
      }
  
      //posT USER
  
      case POST_USER_PENDING: {
        return {
          ...state,
          isLoading: true,
        };
      }
  
      case POST_USER_SUCCESS: {
        return {
          isLoading: false,
          user: state.user.concat(action.data),
        };
      }
      case POST_USER_ERROR: {
        return {
          isError: action.data,
          ...state,
        };
      }
  
      //delete user
      case DELETE_USER_PENDING: {
        return {
          ...state,
          isLoading: true,
        };
      }
  
      case DELETE_USER_SUCCESS: {
        return {
          isLoading: false,
          user: state.user.filter((val) => val.id !== action.data.id),
        };
      }
  
      case DELETE_USER_ERROR: {
        return {
          isLoading: false,
          isError: action.data,
        };
      }
  
      //update
      case UPDATE_USER_PENDING: {
        return {
          ...state,
          isLoading: true,
        };
      }
  
      case UPDATE_USER_SUCCESS: {
        return {
          isLoading: false,
          user: state.user.map((val) => {
            if (val.id == action.data.id) {
              return {
                ...val,
                ...action.data,
              };
            } else {
              return {
                ...val,
              };
            }
          }),
        };
      }
  
      case UPDATE_USER_ERROR: {
        return {
          isLoading: false,
          isError: action.data,
        };
      }
  
      default: {
        return {
          ...state,
        };
      }
    }
  };
  
  export default userReducer;
  