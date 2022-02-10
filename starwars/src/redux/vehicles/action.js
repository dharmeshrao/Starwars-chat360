import {
  ADDVEHICLESLOADING,
  ADDVEHICLESSUCESS,
  ADDVEHICLESERROR,
} from "./actionTypes";
import { getVehiclesAxios } from "../../components/utils/Axios"
export const addVehiclesLoading = () => ({ type: ADDVEHICLESLOADING });
export const addVehiclesSucess = (data) => ({
  type: ADDVEHICLESSUCESS,
  payload: data,
});
export const addVehiclesError = (data) => ({
  type: ADDVEHICLESERROR,
  payload: data,
});

export const fetchAllVehicles = async (dispatch, id) => {
  dispatch(addVehiclesLoading());
  try {
    const { data } = await getVehiclesAxios(id)
    dispatch(addVehiclesSucess(data));
  } catch (err) {
    dispatch(addVehiclesError(err));
  }
};
