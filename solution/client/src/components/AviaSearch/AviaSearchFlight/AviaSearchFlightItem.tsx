import React, {FC} from "react";
import "./aviaSearchFlight.scss";
import {AviaSearchFlightSegmentList} from "./AviaSearchFlightSegmentList";

interface IAviaSearchFlightProps {
    flightData: FlightResponse;


}

export const AviaSearchFlightItem: FC<IAviaSearchFlightProps> = ({flightData}) => {
    const flight = flightData.flight;
    return (
        <div className="avia-search__flight">
            <div className="avia-search__flight-info">
                <div className="avia-search__flight-header">
                    <span className="avia-search__flight-company">{flight.carrier.caption}</span>
                    <div className="avia-search__flight-price">
                                                <span className="avia-search__flight-price-label">
                                                    {flight.price.total.amount} {flight.price.total.currency}
                                                </span>
                        <span className="avia-search__flight-price-note">
                                                    Стоимость для одного взрослого пассажира
                                                </span>
                    </div>

                </div>
                <div className="avia-search__flight-legs">
                    {flight.legs.map((leg, legIndex) => <AviaSearchFlightSegmentList key={legIndex} leg={leg}
                                                                                     legIndex={legIndex}/>)}

                </div>
            </div>
            <button className="avia-search__select-button">ВЫБРАТЬ</button>
        </div>
    );
};