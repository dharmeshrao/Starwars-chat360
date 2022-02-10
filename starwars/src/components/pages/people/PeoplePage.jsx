import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchData } from "../../../redux/people/actions";
import PeopleCard from "../../utils/PeopleCard";
import { Circles } from "react-loader-spinner";
export const PeoplePage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.people);
  useEffect(() => {
    fetchData(dispatch)
  }, [dispatch]);
  if (data?.length === 0)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Circles color="lightgray" ariaLabel="loading-indicator" />
      </div>
    );
  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="text-center text-purple-600 font-bold text-2xl">
        People's Page
      </h1>
      {data &&
        data?.results?.length > 0 &&
        data?.results?.map((e) => (
          <PeopleCard
            key={Math.random()}
            name={e.name}
            birth={e.birth_year}
            gender={e.gender}
            vehicles={e.vehicles}
            starships={e.starships}
            films={e.films}
          />
        ))}
    </div>
  );
};
