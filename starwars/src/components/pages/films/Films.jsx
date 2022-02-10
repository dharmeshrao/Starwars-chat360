import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PeopleCard from "../../utils/PeopleCard";
import { Circles } from "react-loader-spinner";
import {
  addFilmLoading,
  addFilmError,
  addFilmSucess,
} from "../../../redux/films/actiion";
export const Films = () => {
  const params = useParams();
  const [charList, setCharList] = useState([]);
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((store) => store.film);
  const fetchAll = async (data, func) => {
    const results = await Promise.all(
      data.map((url) => fetch(url).then((r) => r.json()))
    );
    func(results);
  };

  useEffect(() => {
    const fetchData = async ()=>{
      dispatch(addFilmLoading());
      try {
        const { data } = await axios.get(
          `https://swapi.dev/api/films/${params.id}`
        );
        fetchAll(data.characters, setCharList);
        dispatch(addFilmSucess(data));
      } catch (err) {
        dispatch(addFilmError());
      }
    }
    fetchData()
  }, [params?.id, dispatch]);
  if (loading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Circles color="lightgray" ariaLabel="loading-indicator" />
      </div>
    );
  if (error) return <div>error</div>;
  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="sm:w-4/5 w-full p-4 bg-white m-auto rounded-xl drop-shadow-lg flex flex-col gap-2">
        <div className="flex flex-row justify-between gap-2 bg-purple-100 bg-opacity-30 rounded-xl p-4">
          <div className="w-1/4 text-center">
            <h4 className="text-purple-600 text-sm sm:font-semibold sm:text-lg">Title</h4>
            <p className="text-black sm:text-2xl text-sm font-bold">{data.title}</p>
          </div>
          <div className="w-1/4 text-center">
            <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">Director</h4>
            <p className="text-black sm:text-2xl text-sm font-bold">{data.director}</p>
          </div>
          <div className="w-1/4 text-center">
            <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">Producer</h4>
            <p className="text-black sm:text-2xl text-sm font-bold">{data.producer}</p>
          </div>
          <div className="w-1/4 text-center">
            <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">
              Release Date
            </h4>
            <p className="text-black text-sm sm:text-2xl font-bold">{data.release_date}</p>
          </div>
        </div>
        <div className="bg-purple-100 bg-opacity-30 text-sm rounded-xl flex p-4">
          {data.opening_crawl}
        </div>
      </div>
      <h1 className="text-center text-purple-600 text-sm font-bold text-2xl">Characters</h1>
      {charList &&
        charList?.length > 0 &&
        charList.map((e) => (
          <PeopleCard
            key={Math.random()}
            name={e.name}
            birth={e.birth_year}
            gender={e.gender}
            height={e.height}
            mass={e.mass}
            hair_color={e.hair_color}
          />
        ))}
    </div>
  );
};
