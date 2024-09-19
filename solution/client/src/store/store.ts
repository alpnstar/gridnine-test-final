import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import {enableMapSet} from "immer";

enableMapSet();
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
    }).concat([])
});


export default store;

