import {
  ADDPEOPLELOADING,
  ADDPEOPLESUCESS,
  ADDPEOPLEERROR,
} from "./actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export const peopleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDPEOPLELOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ADDPEOPLESUCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: false,
      };
    case ADDPEOPLEERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return { ...state };
  }
};
