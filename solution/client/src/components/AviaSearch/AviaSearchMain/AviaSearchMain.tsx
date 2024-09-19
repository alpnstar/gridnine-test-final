import React, {FC} from "react";
import "./aviaSearchMain.scss";
import {AviaSearchFlightList} from "../AviaSearchFlight/AviaSearchFlightList";
import {useAppSelector} from "../../../store/hooks";
import {MagnifyingGlass} from "react-loader-spinner";
import {usePagination} from "./usePagination";


export const AviaSearchMain: FC = () => {
    const data = useAppSelector((state) => state.airSearch.filteredAndSortedData as Data);
    const isLoading = useAppSelector((state) => state.airSearch.isLoading);
    const {flightsToDisplay, isEnd, loadMore} = usePagination(data);
    return (
        <div className="avia-search__main">
            {data ?
                isLoading ? <div className="avia-search__loading"><MagnifyingGlass/>
                </div> : data.result.flights.length === 0 ?
                    <div className="avia-search__not-found"><h1>Ничего не найдено</h1></div> :
                    <>
                        <AviaSearchFlightList flights={flightsToDisplay}/>
                        {!isEnd &&
                            <button onClick={loadMore} className="avia-search__show-more">Показать
                                еще</button>}
                    </>
                : ""}
        </div>
    );
};