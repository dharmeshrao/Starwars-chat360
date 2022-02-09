import axios from "axios";
export const PeopleData = async (url)=>{
  const { data} = await axios.get(url)
  return await data;
}