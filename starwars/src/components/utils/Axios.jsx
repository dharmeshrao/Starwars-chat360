import axios from "axios";
//managed all the links in single page. to make my code maintainable.
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
  //using Promise.all because I want to fetch all characters name & films name at a same time from the given link array.
  const results = await Promise.all(
    data.map((url) => fetch(url).then((r) => r.json()))
  );
  return results;
};
