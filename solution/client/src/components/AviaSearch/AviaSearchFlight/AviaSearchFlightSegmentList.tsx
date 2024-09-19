import React, {FC} from "react";
import {AviaSearchFlightSegmentItem} from "./AviaSearchFlightSegmentItem";

interface IAviaSearchFlightSegmentListProps {
    leg: Leg;
    legIndex: number;
}

export const AviaSearchFlightSegmentList: FC<IAviaSearchFlightSegmentListProps> = ({leg, legIndex}) => {

    return (
        <div className="avia-search__flight-segments-list">
            {legIndex !== 0 && <div className="avia-search__flight-legs-separator">Обратно:</div>}
            {leg.segments.map((item, index) => <AviaSearchFlightSegmentItem segment={item} key={index}/>)}
        </div>
    );
};