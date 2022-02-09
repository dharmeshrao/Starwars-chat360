import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPeopleLoading,
  addPeopleError,
  addPeopleSucess,
} from "../../../redux/people/actions";
import PeopleCard from "../../utils/PeopleCard";
import { Circles } from "react-loader-spinner"
export const PeoplePage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.people);
  useEffect(() => {
    dispatch(addPeopleLoading());
    try {
      fetch("https://swapi.dev/api/people")
        .then((res) => res.json())
        .then((data) => dispatch(addPeopleSucess(data)));
    } catch (err) {
      dispatch(addPeopleError());
    }
  }, [dispatch]);
  if (data?.length === 0) return <div className="w-screen h-screen flex items-center justify-center"><Circles color="lightgray" ariaLabel="loading-indicator" /></div>
  return (
    <div className="p-6 flex flex-col gap-4">
      {data &&
        data?.results?.length > 0 &&
        data.results.map((e) => (
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
