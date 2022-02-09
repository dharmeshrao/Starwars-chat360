import {createStore} from "redux"
import { peopleReducer } from "./people/peopleReducer"
export const store = createStore(peopleReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
