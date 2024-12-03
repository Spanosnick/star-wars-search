import {createAsyncThunk ,createSlice} from "@reduxjs/toolkit";
import {baseUrl} from "../../app/constants";


export const generalSlice = createSlice({
    name: "general",
    initialState: {
        activeCategory: 'films',
        searchQuery: '',
        modalVisibility: false,
        modalDetails: {}
    },
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        toggleModalVisibility: (state) => {
            state.modalVisibility = !state.modalVisibility;
        },
        setModalDetails: (state, action) => {
            state.modalDetails = action.payload;
        }
    }
});


export const selectActiveCategory = (state) => state.general.activeCategory;
export const selectSearchQuery = (state) => state.general.searchQuery;
export const modalVisibility = (state) => state.general.modalVisibility;
export const modalDetails = (state) => state.general.modalDetails;
export const { setActiveCategory, setSearchQuery
    ,toggleModalVisibility,setModalDetails } = generalSlice.actions;
export default generalSlice.reducer;
