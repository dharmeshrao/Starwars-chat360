import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from "redux-thunk"
import { peopleReducer } from "./people/peopleReducer"
import { filmReducer } from "./films/filmReducer"
const Combine = combineReducers({
    people:peopleReducer,
    film:filmReducer
})
export const store = createStore(Combine,compose(applyMiddleware(thunk)))
