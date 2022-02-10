import {
    ADDVEHICLESLOADING,
    ADDVEHICLESSUCESS,
    ADDVEHICLESERROR,
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    data: [],
    error: false,
  };
  
  export const vehiclesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADDVEHICLESLOADING:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case ADDVEHICLESSUCESS:
        return {
          ...state,
          loading: false,
          data: payload,
          error: false,
        };
      case ADDVEHICLESERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return { ...state };
    }
  };
  