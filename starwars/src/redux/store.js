import {createStore} from "redux"
import { peopleReducer } from "./people/peopleReducer"
export const store = createStore(peopleReducer)
