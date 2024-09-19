import {useEffect, useRef} from "react";
import {useAppDispatch} from "../../../store/hooks";
import {airSearchActions, applyParams} from "../../../store/slices/aviaSearchSlice";


export const useFilters = (sortBy: string, trans: string, minPrice: string, maxPrice: string, airlinesSelected: string[]) => {
    const dispatch = useAppDispatch();
    const timeoutId = useRef<number | null>(null);
    useEffect(() => {
        dispatch(airSearchActions.setLoading(true));
        timeoutId.current = window.setTimeout(() => {
            dispatch(airSearchActions.setLoading(false));
            dispatch(applyParams({
                trans,
                sortBy,
                minPrice,
                maxPrice,
                airlines: airlinesSelected
            }));
        }, 1000);
        return () => {
            if (timeoutId.current) {
                dispatch(airSearchActions.setLoading(false));
                clearTimeout(timeoutId.current);
                timeoutId.current = null;
            }
        };
    }, [sortBy, trans, minPrice, maxPrice, airlinesSelected]);
};