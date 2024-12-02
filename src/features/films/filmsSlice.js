import {createAsyncThunk ,createSlice} from "@reduxjs/toolkit";
import {baseUrl} from "../../app/constants";

export const fetchFilms = createAsyncThunk(
    "films/fetchFilms",
    async (arg, thunkAPI) => {
        const state = thunkAPI.getState(); // Access the current state
        const filmsNextUrl = await state.films.filmsNextUrl; // Get filmsNextUrl from the state
        let url
        // If filmsNextUrl is not null or empty, use it as the URL, otherwise use the default URL
        if (filmsNextUrl !== null && filmsNextUrl !== '') {
             url = filmsNextUrl;
        } else {
             url = `${baseUrl}films/`;
        }
        const data = await fetch(url);
        const json = await data.json();
        return json;

    }
);

export const fetchWithSearchQuery = createAsyncThunk(
    "films/fetchWithSearchQuery",
    async (queryValue, thunkAPI) => {
        const url = `${baseUrl}films/?search=${queryValue}`;
        const data = await fetch(url);
        const json = await data.json();
        return json;
    });


export const filmsSlice = createSlice({
    name: "films",
    initialState: {
        films: [],
        isFilmsLoading: false,
        filmsError: false,
        filmsNextUrl: null,
    },

    extraReducers:(builder) => {
        builder.addCase(fetchFilms.pending, (state) => {
            state.isFilmsLoading = true;
            state.filmsError = false;
        })
        .addCase(fetchFilms.fulfilled, (state,action) => {
            state.isFilmsLoading = false;
            state.filmsError = false;
            state.films = state.films.concat(action.payload.results);
            state.filmsNextUrl = action.payload.next;
        })
        .addCase(fetchFilms.rejected, (state,action) => {
            state.isFilmsLoading = false;
            state.filmsError = action.payload;
        })
        .addCase(fetchWithSearchQuery.pending, (state) => {
            state.isFilmsLoading = true;
            state.filmsError = false;
        })
        .addCase(fetchWithSearchQuery.fulfilled, (state,action) => {
            state.isFilmsLoading = false;
            if (action.payload.results.length === 0) {
                state.films = [];
                state.filmsError = true;
            } else {
                state.films = action.payload.results;
                state.filmsError = false;
            }
            state.filmsNextUrl = action.payload.next;
        })
        .addCase(fetchWithSearchQuery.rejected, (state,action) => {
            state.isFilmsLoading = false;
            state.filmsError = action.payload;
        })

    }

});

export const selectFilms = (state) => state.films.films;
export const selectIsFilmsLoading = (state) => state.films.isFilmsLoading;
export const selectFilmsError = (state) => state.films.filmsError;
export const selectFilmsNextUrl = (state) => state.films.filmsNextUrl;

export default filmsSlice.reducer;
