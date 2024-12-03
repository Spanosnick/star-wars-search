import {configureStore} from "@reduxjs/toolkit";
import filmsReducer from "../features/films/FilmsSlice";
import generalReducer from "../features/general/generalSlice";
import peopleReducer from "../features/people/PeopleSlice";


export default configureStore({
    reducer: {
        films: filmsReducer,
        general: generalReducer,
        people: peopleReducer
    }
});
