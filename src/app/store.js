import {configureStore} from "@reduxjs/toolkit";
import filmsReducer from "../features/films/filmsSlice";
import generalReducer from "../features/general/generalSlice";


export default configureStore({
    reducer: {
        films: filmsReducer,
        general: generalReducer,
    }
});
