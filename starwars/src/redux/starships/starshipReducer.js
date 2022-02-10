import {
    ADDSTARSHIPLOADING,
    ADDSTARSHIPSUCESS,
    ADDSTARSHIPERROR,
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    data: [],
    error: false,
  };
  
  export const starshipReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADDSTARSHIPLOADING:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case ADDSTARSHIPSUCESS:
        return {
          ...state,
          loading: false,
          data: payload,
          error: false,
        };
      case ADDSTARSHIPERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return { ...state };
    }
  };
  