import React, {ChangeEvent, FC} from "react";
import {toArray} from "lodash";
import {AviaSearchAirlinesItem} from "./AviaSearchAirlinesItem";

interface IAviaSearchAirlinesListProps {
    airlines: string[];
    handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const AviaSearchAirlinesList: FC<IAviaSearchAirlinesListProps> = ({airlines, handleCheckboxChange}) => {

    return (
        <div className="avia-search__airlines-list">
            {airlines && toArray(airlines).map((item: string, index: number) =>
                <AviaSearchAirlinesItem
                    key={index}
                    item={item}
                    handleCheckboxChange={handleCheckboxChange}
                />
            )}

        </div>

    );
};