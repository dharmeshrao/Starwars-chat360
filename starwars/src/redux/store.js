import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { peopleReducer } from "./people/peopleReducer";
import { filmReducer } from "./films/filmReducer";
import { starshipReducer } from "./starships/starshipReducer";
const Combine = combineReducers({
  people: peopleReducer,
  film: filmReducer,
  starship: starshipReducer,
});
export const store = createStore(Combine, compose(applyMiddleware(thunk)));
