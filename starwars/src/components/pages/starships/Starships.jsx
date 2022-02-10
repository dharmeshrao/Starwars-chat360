import axios from "axios";
import { useEffect } from "react";
import { Circles } from "react-loader-spinner"
import {
  addStarshipsLoading,
  addStarshipsSucess,
  addStarshipsError,
} from "../../../redux/starships/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export const Starships = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.starship);
  useEffect(async () => {
    dispatch(addStarshipsLoading());
    try {
      const { data } = await axios.get(
        `https://swapi.dev/api/starships/${params?.id}`
      );
      dispatch(addStarshipsSucess(data));
    } catch (err) {
      dispatch(addStarshipsError());
    }
  }, [params?.id]);
  if (data?.length === 0)
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Circles color="lightgray" ariaLabel="loading-indicator" />
    </div>
  );
  return <div className="p-6 flex flex-col gap-4">
            <div className="w-4/5 p-4 bg-white m-auto rounded-xl drop-shadow-lg flex flex-col gap-2">
        <div className="flex flex-row justify-between gap-2 bg-purple-100 bg-opacity-30 rounded-xl p-4">
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 font-semibold text-lg">Name</h4>
            <p className="text-black text-2xl font-bold">{data.name}</p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 font-semibold text-lg">Model</h4>
            <p className="text-black text-2xl font-bold">{data.model}</p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 font-semibold text-lg">Manufacturer</h4>
            <p className="text-black text-2xl font-bold">{data.manufacturer}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-2 bg-purple-100 bg-opacity-30 rounded-xl p-4">
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 font-semibold text-lg">Max Atmosphering Speed</h4>
            <p className="text-black text-2xl font-bold">{data.max_atmosphering_speed}</p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 font-semibold text-lg">Passengers</h4>
            <p className="text-black text-2xl font-bold">{data.passengers}</p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 font-semibold text-lg">Starship Class</h4>
            <p className="text-black text-2xl font-bold">{data.starship_class}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-2 bg-purple-100 bg-opacity-30 rounded-xl p-4">
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 font-semibold text-lg">Cost In Credits</h4>
            <p className="text-black text-2xl font-bold">{data.cost_in_credits}</p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 font-semibold text-lg">Length</h4>
            <p className="text-black text-2xl font-bold">{data.length}</p>
          </div>
          <div className="w-1/3 text-center">
            <h4 className="text-purple-600 font-semibold text-lg">Hyperdrive Rating</h4>
            <p className="text-black text-2xl font-bold">{data.hyperdrive_rating}</p>
          </div>
        </div>
        </div>
  </div>
};
