import {useEffect, useState} from "react";

const PER_PAGE: number = 3;

interface PageParams {
    offset: number;
    start: number;
}

const pageParamsInitial: PageParams = {
    offset: PER_PAGE,
    start: 0
};
export const usePagination = (data: Data) => {
    const [flightsToDisplay, setFlightsToDisplay] = useState<FlightResponse[]>([]);
    const [pageParams, setPageParams] = useState<PageParams>(pageParamsInitial);
    const [isEnd, setIsEnd] = useState(false);
    useEffect(() => {
        if (data) {
            setPageParams({
                ...pageParams,
                offset: PER_PAGE,
                start: 0
            });
            setFlightsToDisplay([]);
            setIsEnd(false);
        }
    }, [data]);
    useEffect(() => {
        if (data) {
            const newFlights = data.result.flights.slice(pageParams.start, pageParams.offset);
            setFlightsToDisplay([...flightsToDisplay, ...newFlights]);
            if (newFlights.length < PER_PAGE) setIsEnd(true);
        }
    }, [pageParams]);

    function buttonClickHandler() {
        const offset = pageParams.offset + PER_PAGE;
        const start = offset - PER_PAGE;
        setPageParams({
            ...pageParams,
            offset,
            start
        });
    }

    return {
        flightsToDisplay,
        isEnd,
        loadMore: buttonClickHandler
    };
};