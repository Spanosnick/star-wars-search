import {createAsyncThunk ,createSlice} from "@reduxjs/toolkit";

export const fetchFilms =' Create with Async';

export const filmsSlice = createSlice({
    name: "films",
    initialState: {
        films: [],
        isFilmsLoading: false,
        filmsError: false,
        filmsNextUrl: '',
    },

});

export const selectFilms = (state) => state.films.films;
export const selectIsFilmsLoading = (state) => state.films.isFilmsLoading;
export const selectFilmsError = (state) => state.films.filmsError;
export const selectFilmsNextUrl = (state) => state.films.filmsNextUrl;

export default filmsSlice.reducer;
