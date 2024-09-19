import React, {FC} from "react";
import {UseFormRegister} from "react-hook-form";
import {FormParamsData} from "./AviaSearchFilters";

interface IAviaSearchPriceFiltersProps {
    register: UseFormRegister<FormParamsData>;
}

export const AviaSearchPriceFilters: FC<IAviaSearchPriceFiltersProps> = ({register}) => {

    return (
        <div className="avia-search__price-filter">
            <label className="avia-search__label">Цена</label>
            <input {...register("minPrice", {})}
                   onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                       e.target.value = e.target.value.replace(/\D/g, "");
                   }} type="text" className="avia-search__input" placeholder="От 0"/>
            <input {...register("maxPrice")}
                   onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                       e.target.value = e.target.value.replace(/\D/g, "");
                   }} type="text" className="avia-search__input" placeholder="До 1000000"/>
        </div>

    );
};