import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../rootReducer";
import mockData from "../../mockData";
import _ from "lodash";

interface IApplyParamsInput {
    trans: string,
    sortBy: string,
    minPrice: string,
    maxPrice: string
    airlines: string[],
}

interface IInitialState {
    data: Data | null,
    filteredAndSortedData: Data | null,
    airlines: Set<string>,
    isLoading: boolean
}

const initialState: IInitialState = {
    data: null,
    filteredAndSortedData: null,
    isLoading: false,
    airlines: new Set()
};

export const applyParams = createAsyncThunk<void, IApplyParamsInput>("aviaSearch/applyParams", async (payload, {
    dispatch,
    getState
}) => {
    dispatch(airSearchActions.setDefault());

    if (payload.trans) {
        if (payload.trans === "oneTrans") dispatch(airSearchActions.filterByOneTrans());
        else if (payload.trans === "withoutTrans") dispatch(airSearchActions.filterByWithoutTrans());
    }
    if (+payload.minPrice !== 0) {
        dispatch(airSearchActions.filterByMinPrice(+payload.minPrice));
        console.log(getState());
    }

    if (+payload.maxPrice !== 0) {
        dispatch(airSearchActions.filterByMaxPrice(+payload.maxPrice));
    }
    if (payload.airlines && payload.airlines.length > 0) dispatch(airSearchActions.filterByAirline(payload.airlines));
    if (payload.sortBy === "priceAsc") {
        dispatch(airSearchActions.sortByAscPrice());
    } else if (payload.sortBy === "priceDesc") {
        dispatch(airSearchActions.sortByDescPrice());
    } else dispatch(airSearchActions.sortByArrivalTime());
    dispatch(airSearchActions.getAllFilteredAirlines());

});
export const getData = createAsyncThunk<
    Data,
    void,
    { state: RootState }>(
    "aviaSearch/getData",
    async () => {
        // try {
        //     const res = await axios.post<''>(BASE_URL + '/api/flights', payload, {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             Accept: 'application/json',
        //         }
        //     });
        // } catch (e: any) {
        //     return rejectWithValue(e.response.data);
        //
        // }

        //Имитация получения данных с сервера
        const data = mockData;
        return data;
    }
);

const airSearchSlice = createSlice({
    name: "airSearch",
    initialState,
    reducers: {
        sortByAscPrice(state) {
            if (state.filteredAndSortedData)
                state.filteredAndSortedData = {
                    ...state.filteredAndSortedData,
                    result: {
                        ...state.filteredAndSortedData.result,
                        flights: state.filteredAndSortedData.result.flights.sort((a, b) =>
                            +a.flight.price.total.amount - +b.flight.price.total.amount),
                    }
                };

        },
        sortByDescPrice(state) {
            if (state.filteredAndSortedData)
                state.filteredAndSortedData = {
                    ...state.filteredAndSortedData,
                    result: {
                        ...state.filteredAndSortedData.result,
                        flights: state.filteredAndSortedData.result.flights.sort((a, b) =>
                            +b.flight.price.total.amount - +a.flight.price.total.amount),
                    }
                };


        },
        sortByArrivalTime(state) {
            if (state.filteredAndSortedData)
                state.filteredAndSortedData = {
                    ...state.filteredAndSortedData,
                    result: {
                        ...state.filteredAndSortedData.result,
                        flights: state.filteredAndSortedData.result.flights.sort((a, b) =>
                            +a.flight.legs[0].duration - +b.flight.legs[0].duration),
                    }
                };


        },
        filterByAirline(state, action: PayloadAction<string[]>) {

            if (state.filteredAndSortedData) {
                state.filteredAndSortedData = {
                    ...state.filteredAndSortedData,
                    result: {
                        ...state.filteredAndSortedData.result,
                        flights: state.filteredAndSortedData.result.flights.filter((flight) =>
                            action.payload.includes(flight.flight.carrier.caption))
                    }
                };

            }
        },
        filterByMaxPrice(state, action: PayloadAction<number>) {

            if (state.filteredAndSortedData) {
                state.filteredAndSortedData = {
                    ...state.filteredAndSortedData,
                    result: {
                        ...state.filteredAndSortedData.result,
                        flights: state.filteredAndSortedData.result.flights.filter((flight) =>
                            +flight.flight.price.total.amount <= action.payload)
                    }
                };
            }
        },
        filterByMinPrice(state, action: PayloadAction<number>) {

            if (state.filteredAndSortedData) {
                state.filteredAndSortedData = {
                    ...state.filteredAndSortedData,
                    result: {
                        ...state.filteredAndSortedData.result,
                        flights: state.filteredAndSortedData.result.flights.filter((flight) =>
                            +flight.flight.price.total.amount >= action.payload)
                    }
                };
            }
        },
        filterByOneTrans(state) {

            if (state.filteredAndSortedData) {
                state.filteredAndSortedData = {
                    ...state.filteredAndSortedData,
                    result: {
                        ...state.filteredAndSortedData.result,
                        flights: state.filteredAndSortedData.result.flights.filter((flight) =>
                            flight.flight.legs[0].segments.length === 2)
                    }
                };
            }
        },
        filterByWithoutTrans(state) {

            if (state.filteredAndSortedData) {
                state.filteredAndSortedData = {
                    ...state.filteredAndSortedData,
                    result: {
                        ...state.filteredAndSortedData.result,
                        flights: state.filteredAndSortedData.result.flights.filter((flight) =>
                            flight.flight.legs[0].segments.length === 1)
                    }
                };
            }
        },
        getAllFilteredAirlines(state) {
            if (state.filteredAndSortedData) {
                state.airlines.clear();
                state.filteredAndSortedData.result.flights.forEach((flight) => {
                    state.airlines.add(flight.flight.carrier.caption);
                });

            }
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },

        setDefault(state) {
            if (state.data) {
                state.filteredAndSortedData = _.cloneDeep(state.data);
            }
        }
    }, extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, {payload}) => {
            state.data = payload;
            state.filteredAndSortedData = payload;
            getAllAirlines();

            function getAllAirlines() {
                if (state.data) {
                    state.data.result.flights.forEach((flight) => {
                        state.airlines.add(flight.flight.carrier.caption);
                    });

                }
            }

        });

    }
});


export const {actions: airSearchActions, reducer: airSearchReducer} = airSearchSlice;