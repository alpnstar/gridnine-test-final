import React, {FC} from "react";
import {AviaSearchFlightItem} from "./AviaSearchFlightItem";

interface IAviaSearchFlightListProps {
    flights: FlightResponse[];
}

export const AviaSearchFlightList: FC<IAviaSearchFlightListProps> = ({flights}) => {

    return (
        <article className="avia-search__results">
            {flights.map((flight, index) => <AviaSearchFlightItem key={index}
                                                                  flightData={flight}/>)}
        </article>
    );
};