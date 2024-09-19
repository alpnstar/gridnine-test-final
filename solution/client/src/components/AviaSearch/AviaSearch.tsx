import React, {FC, useEffect} from "react";
import {AviaSearchFilters} from "./AviaSearchFilters/AviaSearchFilters";
import {AviaSearchMain} from "./AviaSearchMain/AviaSearchMain";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getData} from "../../store/slices/aviaSearchSlice";

export const AviaSearch: FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getData());
    }, []);
    return (
        <section className="avia-search">
            <div className="avia-search__wrapper container">
                <AviaSearchFilters/>
                <AviaSearchMain/>
            </div>
        </section>

    );
};
