import React, {FC} from "react";
import {FormParamsData, sortFilterByValues} from "./AviaSearchFilters";
import {UseFormRegister} from "react-hook-form";

interface IAviaSearchTransferProps {
    register: UseFormRegister<FormParamsData>
}

export const AviaSearchTransferFilters: FC<IAviaSearchTransferProps> = ({register}) => (
    <div className="avia-search__filters-section">
        <label className="avia-search__label">Фильтровать</label>
        <div className="avia-search__filter-option">
            <input {...register("trans")} type="radio" id="filter-transfer-1" className="avia-search__checkbox"
                   value={sortFilterByValues.all}/>
            <label htmlFor="filter-transfer-1">Не выбрано</label>
        </div>
        <div className="avia-search__filter-option">
            <input {...register("trans")} type="radio" id="filter-transfer-2" className="avia-search__checkbox"
                   value={sortFilterByValues.oneTrans}/>
            <label htmlFor="filter-transfer-2">1 пересадка</label>
        </div>
        <div className="avia-search__filter-option">
            <input {...register("trans")} type="radio" id="filter-direct" className="avia-search__checkbox"
                   value={sortFilterByValues.withoutTrans}/>
            <label htmlFor="filter-direct">без пересадок</label>
        </div>
    </div>

);