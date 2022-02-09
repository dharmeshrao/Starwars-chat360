import {applyMiddleware, compose, createStore} from "redux"
import thunk from "redux-thunk"
import { peopleReducer } from "./people/peopleReducer"
export const store = createStore(peopleReducer,compose(applyMiddleware(thunk)))
