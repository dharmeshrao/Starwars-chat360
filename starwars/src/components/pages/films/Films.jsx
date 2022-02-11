import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { fetchAll, getFilmsAxios } from "../../utils/Axios";
import { fetchFilmData } from "../../../redux/films/actiion";
import { FilmCard } from "../../utils/FilmCard";
export const Films = () => {
  const params = useParams();
  const [charList, setCharList] = useState([]);
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((store) => store.film);

  useEffect(() => {

    //here fetchFilmData will dispatch all the film to redux.
    fetchFilmData(dispatch, params?.id);
    getFilmsAxios(params?.id).then((res) =>
      fetchAll(res?.data?.characters).then((res) => setCharList(res))
    );
    //getFilms Axios will fetch all the films and fetchAll will fetch all the characters link.
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
            <h4 className="text-purple-600 text-sm sm:font-semibold sm:text-lg">
              Title
            </h4>
            <p className="text-black sm:text-2xl text-sm font-bold">
              {data.title}
            </p>
          </div>
          <div className="w-1/4 text-center">
            <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">
              Director
            </h4>
            <p className="text-black sm:text-2xl text-sm font-bold">
              {data.director}
            </p>
          </div>
          <div className="w-1/4 text-center">
            <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">
              Producer
            </h4>
            <p className="text-black sm:text-2xl text-sm font-bold">
              {data.producer}
            </p>
          </div>
          <div className="w-1/4 text-center">
            <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">
              Release Date
            </h4>
            <p className="text-black text-sm sm:text-2xl font-bold">
              {data.release_date}
            </p>
          </div>
        </div>
        <div className="bg-purple-100 bg-opacity-30 text-sm rounded-xl flex p-4">
          {data.opening_crawl}
        </div>
      </div>
      <h1 className="text-center text-purple-600 text-sm font-bold sm:text-2xl">
        Characters
      </h1>
      {charList?.length > 0 ? (
        charList.map((e) => (
          <FilmCard
            key={Math.random()}
            name={e.name}
            hair_color={e.hair_color}
            birth={e.birth_year}
            gender={e.gender}
            height={e.height}
            mass={e.mass}
          />
        ))
      ) : (
        <div className="w-screen flex items-center justify-center">
          <Circles color="lightgray" ariaLabel="loading-indicator" />
        </div>
      )}
    </div>
  );
};
