import {createAsyncThunk ,createSlice} from "@reduxjs/toolkit";
import {baseUrl} from "../../app/constants";


export const generalSlice = createSlice({
    name: "general",
    initialState: {
        activeCategory: 'films',
        searchQuery: '',
    },
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    }
});


export const selectActiveCategory = (state) => state.general.activeCategory;
export const selectSearchQuery = (state) => state.general.searchQuery;
export const { setActiveCategory, setSearchQuery } = generalSlice.actions;
export default generalSlice.reducer;
