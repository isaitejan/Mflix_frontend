import { createSlice } from "@reduxjs/toolkit";

export const clickSlice = createSlice({
    name : 'ImageClick',
    initialState : {
        clickData : null,
        searchData : null,
        moviesData : null
    },
    reducers : {
        saveClickedData : (state, action) =>{
            state.clickData = action.payload;
        },
        saveSearchedData : (state, action) =>{
            state.searchData = action.payload;
        },
        saveMoviesData : (state, action) =>{
            state.moviesData = action.payload;
        }
    }
})

export const { saveClickedData , saveSearchedData, saveMoviesData} = clickSlice.actions;

export default clickSlice.reducer;