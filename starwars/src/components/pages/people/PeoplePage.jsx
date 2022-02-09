import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux"
import { addPeopleLoading ,addPeopleError , addPeopleSucess } from "../../../redux/people/actions"
import { PeopleCard } from "../../utils/PeopleCard";
export const PeoplePage = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(addPeopleLoading())
    try{
    fetch("https://swapi.dev/api/people")
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    }
    catch(err){
        dispatch(addPeopleError())
    }
    },[dispatch])
    const store = useSelector((store)=>store)
    return <div className="p-6">
    <PeopleCard/>
    </div>
}