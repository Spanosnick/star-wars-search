import {createAsyncThunk ,createSlice} from "@reduxjs/toolkit";
import {baseUrl} from "../../app/constants";

export const fetchFilms = createAsyncThunk(
    "films/fetchFilms",
    async (arg, thunkAPI) => {
        const state = thunkAPI.getState(); // Access the current state
        const filmsNextUrl = await state.films.filmsNextUrl; // Get filmsNextUrl from the state
        const searchQuery = await state.general.searchQuery; // Get searchQuery from the state
        console.log(searchQuery)
        let url
        if (filmsNextUrl !== '') {
             url = filmsNextUrl;
        } else {
             url = `${baseUrl}films/`;
        }
        if (!searchQuery) {
            url = `${baseUrl}films/?search=${searchQuery}`;
        }
        const data = await fetch(url);
        const json = await data.json();
        return json;

    }
);


export const filmsSlice = createSlice({
    name: "films",
    initialState: {
        films: [],
        isFilmsLoading: false,
        filmsError: false,
        filmsNextUrl: '',
    },

    extraReducers:(builder) => {
        builder.addCase(fetchFilms.pending, (state) => {
            state.isFilmsLoading = true;
            state.filmsError = false;
        });
        builder.addCase(fetchFilms.fulfilled, (state,action) => {
            state.isFilmsLoading = false;
            state.filmsError = false;
            state.films = state.films.concat(action.payload.results);
            state.filmsNextUrl = action.payload.next;
        });
        builder.addCase(fetchFilms.rejected, (state,action) => {
            state.isFilmsLoading = false;
            state.filmsError = action.payload;
        });
    }

});

export const selectFilms = (state) => state.films.films;
export const selectIsFilmsLoading = (state) => state.films.isFilmsLoading;
export const selectFilmsError = (state) => state.films.filmsError;
export const selectFilmsNextUrl = (state) => state.films.filmsNextUrl;

export default filmsSlice.reducer;
