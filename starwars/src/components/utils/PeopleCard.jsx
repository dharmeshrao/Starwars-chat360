import { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
const PeopleCard = ({
  name,
  birth,
  gender,
  films,
  starships,
  vehicles,
}) => {
  const [peopleFilm, setPeopleFilm] = useState([]);
  const [peopleVehicles, setPeopleVehicles] = useState([]);
  const [peopleStarships, setPeopleStarships] = useState([]);
  const navigate = useNavigate();
  const fetchAll = async (data, func) => {
    const results = await Promise.all(
      data.map((url) => fetch(url).then((r) => r.json()))
    );
    func(results);
  };

  useEffect(() => {
    fetchAll(films, setPeopleFilm);
    fetchAll(starships, setPeopleStarships);
    fetchAll(vehicles, setPeopleVehicles);
  }, [films, starships, vehicles]);

  return (
    <div className="w-4/5 p-4 bg-white m-auto rounded-xl drop-shadow-lg flex flex-col gap-2">
      <div className="flex justify-around text-center p-4 bg-purple-100 bg-opacity-40 rounded-xl">
        <div className="w-1/3">
          <h4 className="text-purple-600 font-semibold text-lg">Name</h4>
          <p className="text-black text-2xl font-bold">{name || ""}</p>
        </div>
        <div className="w-1/3">
          <h4 className="text-purple-600 font-semibold text-lg">Birth</h4>
          <p className="text-black text-2xl font-bold">{birth || ""}</p>
        </div>
        <div className="w-1/3">
          <h4 className="text-purple-600 font-semibold text-lg">Gender</h4>
          <p className="text-black text-2xl font-bold">{gender || ""}</p>
        </div>
      </div>
      <div className="bg-purple-100 bg-opacity-30 rounded-xl flex p-4 items-center">
        <h2 className="font-semibold text-xl mr-9 text-black">Films: </h2>
        <div className="flex flex-wrap gap-y-2">
          {peopleFilm &&
            peopleFilm?.length > 0 &&
            peopleFilm.map((e, i) => (
              <button
                key={i}
                onClick={() => navigate(`/films/${e.episode_id}`)}
                className="bg-white ml-4 hover:bg-gray-100 text-purple-600 font-semibold py-1 px-4 border border-purple-600 rounded shadow"
              >
                {e.title}
              </button>
            ))}
        </div>
      </div>
      <div className="bg-purple-100 bg-opacity-30 rounded-xl flex p-4 items-center">
        <h2 className="font-semibold text-xl text-black">Starships: </h2>
        <div className="flex flex-wrap gap-y-2">
          {peopleStarships &&
            peopleStarships?.length > 0 &&
            peopleStarships.map((e, i) => (
              <button
                key={i}
                className="bg-white ml-4 hover:bg-gray-100 text-purple-600 font-semibold py-1 px-4 border border-purple-600 rounded shadow"
              >
                {e.name}
              </button>
            ))}
        </div>
      </div>
      <div className="bg-purple-100 bg-opacity-30 rounded-xl flex p-4 items-center">
        <h2 className="font-semibold text-xl mr-2 text-black">Vehicles: </h2>
        <div className="flex flex-wrap gap-y-2">
          {peopleVehicles &&
            peopleVehicles?.length > 0 &&
            peopleVehicles.map((e, i) => (
              <button
                key={i}
                className="bg-white ml-4 hover:bg-gray-100 text-purple-600 font-semibold py-1 px-4 border border-purple-600 rounded shadow"
              >
                {e.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default memo(PeopleCard)

// The cards should show these fields:- name, birth_year, gender, films, starships, vehicles. (The films and starships will be only links to two different pages)
