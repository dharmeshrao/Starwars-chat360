import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllVehicles } from "../../../redux/vehicles/action";
export const Vehicles = () => {
  const { data } = useSelector((store) => store.vehicles);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(async () => {
    fetchAllVehicles(dispatch, params?.id);
  }, [params?.id]);
  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="text-center text-purple-600 font-bold text-2xl">
        Vehicles Information
      </h1>

      <div className="sm:w-4/5 p-4 bg-white m-auto rounded-xl drop-shadow-lg flex flex-col gap-2">
        <div className="flex flex-row justify-between gap-2 bg-purple-100 bg-opacity-30 rounded-xl p-4">
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">Name</h4>
            <p className="text-black sm:text-2xl font-bold">{data.name}</p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">Model</h4>
            <p className="text-black sm:text-2xl font-bold">{data.model}</p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">
              Manufacturer
            </h4>
            <p className="text-black sm:text-2xl font-bold">{data.manufacturer}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-2 bg-purple-100 bg-opacity-30 rounded-xl p-4">
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">
              Max Atmosphering Speed
            </h4>
            <p className="text-black sm:text-2xl font-bold">
              {data.max_atmosphering_speed}
            </p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">Crew</h4>
            <p className="text-black sm:text-2xl font-bold">{data.crew}</p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">
              Passengers
            </h4>
            <p className="text-black sm:text-2xl font-bold">{data.passengers}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-2 bg-purple-100 bg-opacity-30 rounded-xl p-4">
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">
              Cargo Capacity
            </h4>
            <p className="text-black sm:text-2xl font-bold">
              {data.cargo_capacity}
            </p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">Length</h4>
            <p className="text-black sm:text-2xl font-bold">{data.length}</p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">
              Cost In Credits
            </h4>
            <p className="text-black sm:text-2xl font-bold">
              {data.cost_in_credits}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-2 bg-purple-100 bg-opacity-30 rounded-xl p-4">
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">Crew</h4>
            <p className="text-black sm:text-2xl font-bold">{data.crew}</p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">
              Consumables
            </h4>
            <p className="text-black sm:text-2xl font-bold">{data.consumables}</p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">
              Vehicle Class
            </h4>
            <p className="text-black sm:text-2xl font-bold">
              {data.vehicle_class}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
