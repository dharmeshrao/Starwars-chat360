import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { peopleReducer } from "./people/peopleReducer";
import { filmReducer } from "./films/filmReducer";
import { starshipReducer } from "./starships/starshipReducer";
import { vehiclesReducer } from "./vehicles/vehiclesReducer";
const Combine = combineReducers({
  people: peopleReducer,
  film: filmReducer,
  starship: starshipReducer,
  vehicles: vehiclesReducer,
});
//Combining all the reducers and applied thunk middleware be we want to perform asyncronys task and we want to delay our disptach.
//sometimes disptach return's a fuction insted of an action 
//Compose let us write deaply nested fucntion transformation without rightward drift to the code..
export const store = createStore(Combine, compose(applyMiddleware(thunk)));
