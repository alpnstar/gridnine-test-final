import React, {ChangeEvent, FC, useEffect, useState} from "react";
import "./aviaSearchFilters.scss";
import {useAppSelector} from "../../../store/hooks";
import {useForm} from "react-hook-form";
import {toArray} from "lodash";
import {AviaSearchAirlinesList} from "./AviaSearchAirlinesList";
import {useFilters} from "./useFilters";
import {SortOptions} from "./AviaSearchSortOptions";
import {AviaSearchTransferFilters} from "./AviaSearchTransferFilters";
import {AviaSearchPriceFilters} from "./AviaSearchPriceFilters";


export enum sortFilterByValues {
    priceAsc = "priceAsc",
    priceDesc = "priceDesc",
    timeAsc = "timeAsc",
    oneTrans = "oneTrans",
    withoutTrans = "withoutTrans",
    all = "all"
}

export interface FormParamsData {
    trans: sortFilterByValues;
    sortBy: sortFilterByValues;
    minPrice: string;
    maxPrice: string;
}

export const AviaSearchFilters: FC = () => {
    const airlines = useAppSelector(state => state.airSearch.airlines);
    const {register, watch} = useForm<FormParamsData>({
        defaultValues: {
            trans: sortFilterByValues.all,
            sortBy: sortFilterByValues.priceAsc,
            minPrice: "",
            maxPrice: ""
        }
    });

    const sortBy = watch("sortBy");
    const trans = watch("trans");
    const minPrice = watch("minPrice");
    const maxPrice = watch("maxPrice");
    const [airlinesSelected, setAirlinesSelected] = useState<string[]>([]);
    const [airlinesToDisplay, setAirlinesToDisplay] = useState<string[]>([]);
    useFilters(sortBy, trans, minPrice, maxPrice, airlinesSelected);
    useEffect(() => {
        setAirlinesToDisplay([]);
        setAirlinesSelected([]);
    }, [sortBy, trans, minPrice, maxPrice]);
    useEffect(() => {
        if (!airlinesToDisplay.length) setAirlinesToDisplay(toArray(airlines));
    }, [airlines]);
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (event.target.checked) {
            setAirlinesSelected([...airlinesSelected, value]);
        } else {
            setAirlinesSelected(airlinesSelected.filter(item => item !== value));
        }
    };

    return (
        <aside className="avia-search__filters">
            <SortOptions register={register}/>
            <AviaSearchTransferFilters register={register}/>
            <AviaSearchPriceFilters register={register}/>
            <div className="avia-search__airlines">
                <span className="avia-search__label">Авиакомпании</span>
                <AviaSearchAirlinesList airlines={airlinesToDisplay} handleCheckboxChange={handleCheckboxChange}/>
            </div>
        </aside>

    );
};