import axios from "axios";
import { useEffect } from "react";
import { Circles } from "react-loader-spinner";
import { getAllStarshipData } from "../../../redux/starships/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export const Starships = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { data , loading } = useSelector((store) => store.starship);
  useEffect(() => {
    getAllStarshipData(dispatch, params?.id);
  }, [params?.id]);
  //Added loading here because It takes some time to fetch the data from api. 
  if (loading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Circles color="lightgray" ariaLabel="loading-indicator" />
      </div>
    );
  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="text-center text-purple-600 font-bold sm:text-2xl">
        Starship Information
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
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">
              Passengers
            </h4>
            <p className="text-black sm:text-2xl font-bold">{data.passengers}</p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">
              Starship Class
            </h4>
            <p className="text-black sm:text-2xl font-bold">
              {data.starship_class}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-2 bg-purple-100 bg-opacity-30 rounded-xl p-4">
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">
              Cost In Credits
            </h4>
            <p className="text-black sm:text-2xl font-bold">
              {data.cost_in_credits}
            </p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">Length</h4>
            <p className="text-black sm:text-2xl font-bold">{data.length}</p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 sm:font-semibold sm:text-lg">
              Hyperdrive Rating
            </h4>
            <p className="text-black sm:text-2xl font-bold">
              {data.hyperdrive_rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
