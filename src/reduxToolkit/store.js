import { configureStore } from "@reduxjs/toolkit";
import clickReducer from './createSlice';

export const store = configureStore({
    reducer : {
        click : clickReducer,
        // search : clickReducer
    }
})