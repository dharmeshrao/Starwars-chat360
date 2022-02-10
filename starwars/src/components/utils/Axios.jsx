import axios from "axios";
export const getPeopleAxios = () => {
  return axios.get("https://swapi.dev/api/people");
};

export const getStarshipAxios = (id) => {
  return axios.get(`https://swapi.dev/api/starships/${id}`);
};

export const getFilmsAxios = (id) => {
  return axios.get(`https://swapi.dev/api/films/${id}`);
};

export const getVehiclesAxios = (id) => {
  return axios.get(`https://swapi.dev/api/vehicles/${id}`);
};

export const fetchAll = async (data) => {
  const results = await Promise.all(
    data.map((url) => fetch(url).then((r) => r.json()))
  );
  return results;
};
