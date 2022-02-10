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
export const store = createStore(Combine, compose(applyMiddleware(thunk)));
