import {
    ADDFILMLOADING,
    ADDFILMSUCESS,
    ADDFILMERROR,
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    data: [],
    error: false,
  };
  
  export const filmReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADDFILMLOADING:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case ADDFILMSUCESS:
        return {
          ...state,
          loading: false,
          data: payload,
          error: false,
        };
      case ADDFILMERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return { ...state };
    }
  };
  