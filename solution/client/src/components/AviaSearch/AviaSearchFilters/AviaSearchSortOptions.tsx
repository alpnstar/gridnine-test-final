import React, {FC} from "react";
import {UseFormRegister} from "react-hook-form";
import {FormParamsData} from "./AviaSearchFilters";

interface ISortOptionsProps {
    register: UseFormRegister<FormParamsData>
}

export const SortOptions: FC<ISortOptionsProps> = ({register}) => {
    return (
        <div className="avia-search__sort">
            <label className="avia-search__label">Сортировать</label>
            <div className="avia-search__sort-option">
                <input {...register("sortBy")} type="radio" id="sort-price-asc"
                       className="avia-search__radio" value="priceAsc"/>
                <label htmlFor="sort-price-asc">по возрастанию цены</label>
            </div>
            <div className="avia-search__sort-option">
                <input {...register("sortBy")} type="radio" id="sort-price-desc"
                       className="avia-search__radio" value="priceDesc"/>
                <label htmlFor="sort-price-desc">по убыванию цены</label>
            </div>
            <div className="avia-search__sort-option">
                <input {...register("sortBy")} type="radio" id="sort-time"
                       className="avia-search__radio" value="timeAsc"/>
                <label htmlFor="sort-time">по времени в пути</label>
            </div>
        </div>
    )
};
