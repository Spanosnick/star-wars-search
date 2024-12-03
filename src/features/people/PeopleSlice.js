import {createAsyncThunk ,createSlice} from "@reduxjs/toolkit";
import {baseUrl} from "../../app/constants";

export const fetchPeople = createAsyncThunk(
    "people/fetchPeople",
    async (arg, thunkAPI) => {
        const state = thunkAPI.getState(); // Access the current state
        const peopleNextUrl = await state.people.peopleNextUrl; // Get filmsNextUrl from the state
        let url
        // If filmsNextUrl is not null or empty, use it as the URL, otherwise use the default URL
        if (peopleNextUrl !== null && peopleNextUrl !== '') {
            url = peopleNextUrl;
        } else {
            url = `${baseUrl}people/`;
        }
        const data = await fetch(url);
        const json = await data.json();
        return json;

    }
);


export const fetchPeopleWithSearch = createAsyncThunk(
    "people/fetchPeopleWithSearch",
    async (queryValue, thunkAPI) => {
        const url = `${baseUrl}people/?search=${queryValue}`;
        const data = await fetch(url);
        const json = await data.json();
        return json;
    });


export const PeopleSlice = createSlice({
    name: "people",
    initialState: {
        people: [],
        isPeopleLoading: false,
        peopleError: false,
        peopleNextUrl: null,
    },
    extraReducers:(builder) => {
        builder.addCase(fetchPeople.pending, (state) => {
            state.isPeopleLoading = true;
            state.peopleError = false;
        })
            .addCase(fetchPeople.fulfilled, (state,action) => {
                state.isPeopleLoading = false;
                state.peopleError = false;
                state.people = state.people.concat(action.payload.results);
                state.peopleNextUrl = action.payload.next;
            })
            .addCase(fetchPeople.rejected, (state,action) => {
                state.isPeopleLoading = false;
                state.peopleError = action.payload;
            })
            .addCase(fetchPeopleWithSearch.pending, (state) => {
                state.isPeopleLoading = true;
                state.peopleError = false;
            })
            .addCase(fetchPeopleWithSearch.fulfilled, (state,action) => {
                state.isPeopleLoading = false;
                if (action.payload.results.length === 0) {
                    state.people = [];
                    state.peopleError = true;
                } else {
                    state.people = action.payload.results;
                    state.peopleError = false;
                }
                state.peopleNextUrl = action.payload.next;
            })
            .addCase(fetchPeopleWithSearch.rejected, (state,action) => {
                state.isPeopleLoading = false;
                state.peopleError = action.payload;
            })
    }

});

export const selectPeople = (state) => state.people.people;
export const selectIsPeopleLoading = (state) => state.people.isPeopleLoading;
export const selectPeopleError = (state) => state.people.peopleError;
export const selectPeopleNextUrl = (state) => state.people.peopleNextUrl;

export default PeopleSlice.reducer;
