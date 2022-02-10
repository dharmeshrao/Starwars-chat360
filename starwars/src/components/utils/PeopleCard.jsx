import { useState, useEffect, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchAll } from "./Axios";
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
  useEffect(() => {
    let mount = true;
    fetchAll(films).then((data) => {
      if (mount) setPeopleFilm(data);
    });
    fetchAll(starships).then((data) => {
      if (mount) setPeopleStarships(data);
    });
    fetchAll(vehicles).then((data) => {
      if (mount) setPeopleVehicles(data);
    });
    return () => {
      mount = false;
    };
  }, [films, starships, vehicles]);
  return (
    <div className="sm:w-4/5 w-full p-4 bg-white m-auto rounded-xl drop-shadow-lg flex flex-col gap-2">
      <div className="flex justify-around text-center p-4 bg-purple-100 bg-opacity-40 rounded-xl">
        <div className="w-1/3">
          <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">
            Name
          </h4>
          <p className="text-black sm:text-2xl sm:font-bold">{name || ""}</p>
        </div>
        <div className="w-1/3">
          <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">
            Birth
          </h4>
          <p className="text-black sm:text-2xl sm:font-bold">{birth || ""}</p>
        </div>
        <div className="w-1/3">
          <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">
            Gender
          </h4>
          <p className="text-black sm:text-2xl sm:font-bold">{gender || ""}</p>
        </div>
      </div>
      {films ? (
        peopleFilm.length > 0 ? (
          <div className="bg-purple-100 bg-opacity-30 rounded-xl flex p-4 items-center">
            <h2 className="font-semibold sm:text-xl mr-9 text-black">
              Films:{" "}
            </h2>
            <div className="flex flex-wrap gap-y-2">
              {peopleFilm.map((e) => (
                <button
                  key={Math.random()}
                  onClick={() =>
                    navigate(
                      `/films/${
                        e?.url?.split("/")[e.url.split("/").length - 2]
                      }`
                    )
                  }
                  className="bg-white ml-4 hover:bg-gray-100 text-purple-600 text-sm font-semibold py-1 px-4 border border-purple-600 rounded shadow"
                >
                  {e.title}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-purple-400 shadow bg-opacity-30 animate-pulse rounded-xl flex p-6 h/8 items-center"></div>
        )
      ) : (
        ""
      )}
      {starships ? (
        peopleStarships.length > 0 ? (
          <div className="bg-purple-100 bg-opacity-30 rounded-xl flex p-4 items-center">
            <h2 className="font-semibold sm:text-xl text-black">Starships: </h2>
            <div className="flex flex-wrap gap-y-2">
              {peopleStarships.map((e) => (
                <button
                  key={Math.random()}
                  onClick={() =>
                    navigate(
                      `/starships/${
                        e?.url?.split("/")[e.url.split("/").length - 2]
                      }`
                    )
                  }
                  className="bg-white ml-4 hover:bg-gray-100 text-purple-600 text-sm font-semibold py-1 px-4 border border-purple-600 rounded shadow"
                >
                  {e.name}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-purple-400 shadow bg-opacity-30 animate-pulse rounded-xl flex p-6 h/8 items-center"></div>
        )
      ) : (
        ""
      )}
      {vehicles ? (
        peopleVehicles.length > 0 ? (
          <div className="bg-purple-100 bg-opacity-30 rounded-xl flex p-4 items-center">
            <h2 className="font-semibold sm:text-xl mr-2 text-black">
              Vehicles:
            </h2>
            <div className="flex flex-wrap gap-y-2">
              {peopleVehicles.map((e) => (
                <button
                  key={Math.random()}
                  className="bg-white ml-4 hover:bg-gray-100 text-purple-600 text-sm font-semibold py-1 px-4 border border-purple-600 rounded shadow"
                >
                  <Link
                    to={`/vehicles/${
                      e?.url?.split("/")[e.url.split("/").length - 2]
                    }`}
                  >
                    {e.name}
                  </Link>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-purple-400 shadow bg-opacity-30 animate-pulse rounded-xl flex p-6 h/8 items-center"></div>
        )
      ) : (
        ""
      )}
    </div>
  );
};
export default memo(PeopleCard);
