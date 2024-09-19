import {combineReducers} from "@reduxjs/toolkit/react";
import {airSearchReducer} from "./slices/aviaSearchSlice";

export const rootReducer = combineReducers({
    airSearch:airSearchReducer,
});
export type RootState = ReturnType<typeof rootReducer>
