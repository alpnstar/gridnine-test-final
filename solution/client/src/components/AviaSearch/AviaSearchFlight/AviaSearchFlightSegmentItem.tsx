import React, {FC} from "react";
import {dateToString} from "../../../utils/common";

interface AviaSearchFlightSegmentProps {
    segment: Segment;
}

export const AviaSearchFlightSegmentItem: FC<AviaSearchFlightSegmentProps> = ({segment}) => (
    <div className="avia-search__flight-segments-item">
        <div className="avia-search__flight-route">
            <span className="avia-search__flight-departure">
                {segment.departureAirport.caption} ({segment.departureAirport.uid}) → {segment.arrivalAirport.caption} ({segment.arrivalAirport.uid})
            </span>
        </div>
        <div className="avia-search__flight-times-list">
            <div className="avia-search__flight-times-item">
                <span className="avia-search__flight-times-hours">
                    {dateToString(segment.departureDate)[0]}
                </span>
                <span className="avia-search__flight-times-date">
                    {dateToString(segment.departureDate)[1]}
                </span>
            </div>
            <div className="avia-search__flight-times-item avia-search__flight-times-total">
                {Math.round(segment.travelDuration / 60)} ч. {segment.travelDuration % 60} мин.
                <span className="avia-search__flight-times-count">Пересадка</span>
            </div>
            <div className="avia-search__flight-times-item">
                <span className="avia-search__flight-times-date">
                    {dateToString(segment.arrivalDate)[1]}
                </span>
                <span className="avia-search__flight-times-hours">
                    {dateToString(segment.arrivalDate)[0]}
                </span>
            </div>
        </div>
        <span className="avia-search__flight-executor">
            Рейс выполняет: {segment.airline.caption}
        </span>
    </div>
);