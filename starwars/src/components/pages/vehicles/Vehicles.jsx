import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import {
  addVehiclesLoading,
  addVehiclesError,
  addVehiclesSucess,
} from "../../../redux/vehicles/action";
export const Vehicles = () => {
  const { data } = useSelector((store) => store.vehicles);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(addVehiclesLoading());
    try {
      const { data } = await axios.get(``);
      dispatch(addVehiclesSucess(data));
    } catch (err) {
      dispatch(addVehiclesError(err));
    }
  }, [params?.id]);
  return <div>
      
  </div>;
};

// "name": "Snowspeeder",
// "model": "t-47 airspeeder",
// "manufacturer": "Incom corporation",
// "cost_in_credits": "unknown",
// "length": "4.5",
// "max_atmosphering_speed": "650",
// "crew": "2",
// "passengers": "0",
// "cargo_capacity": "10",
// "consumables": "none",
// "vehicle_class": "airspeeder",
// "pilots": [
//     "https://swapi.dev/api/people/1/",
//     "https://swapi.dev/api/people/18/"
// ],
// "films": [
//     "https://swapi.dev/api/films/2/"
// ],
