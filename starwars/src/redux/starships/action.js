import {
  ADDSTARSHIPLOADING,
  ADDSTARSHIPSUCESS,
  ADDSTARSHIPERROR,
} from "./actionTypes";
import { getStarshipAxios } from "../../components/utils/Axios"
export const addStarshipsLoading = () => ({ type: ADDSTARSHIPLOADING });
export const addStarshipsSucess = (data) => ({
  type: ADDSTARSHIPSUCESS,
  payload: data,
});
export const addStarshipsError = (data) => ({
  type: ADDSTARSHIPERROR,
  payload: data,
});

export const getAllStarshipData = async (dispatch, id) => {
  dispatch(addStarshipsLoading());
  try {
    const { data } = await getStarshipAxios(id);
    dispatch(addStarshipsSucess(data));
  } catch (err) {
    dispatch(addStarshipsError());
  }
};
