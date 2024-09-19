import React, {ChangeEvent, FC} from "react";

interface IAviaSearchAirlinesItemProps {
    item: string;
    handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

export const AviaSearchAirlinesItem: FC<IAviaSearchAirlinesItemProps> = ({item, handleCheckboxChange}) => {

    return (
        <div className="avia-search__airlines-item">
            <label htmlFor={item}>
                <input onChange={handleCheckboxChange} value={item} type="checkbox" id={item}
                       className="avia-search__checkbox"/>
                {item}</label>
        </div>

    );
};