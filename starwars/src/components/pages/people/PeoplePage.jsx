import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPeopleLoading,
  addPeopleError,
  addPeopleSucess,
} from "../../../redux/people/actions";
import PeopleCard from "../../utils/PeopleCard";
export const PeoplePage = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((store) => store);
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
  console.log(data);
  if (loading) return <div>...loading</div>;
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
