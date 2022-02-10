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
