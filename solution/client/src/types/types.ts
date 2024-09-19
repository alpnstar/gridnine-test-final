interface Data {
    result: {
        flights: FlightResponse[],
        bestPrices: BestPrices,
    }
}

interface Money {
    amount: string;
    currency: string;
    currencyCode: string;
}

interface Rate {
    totalUsd: Money;
    totalEur: Money;
}

interface PassengerPrice {
    total: Money;
    passengerType: PassengerType;
    singlePassengerTotal: Money;
    passengerCount: number;
    tariff: Money;
    feeAndTaxes: Money;
}

interface PassengerType {
    uid: string;
    caption: string;
}

interface ServiceStatus {
    uid: string;
    caption: string;
}

interface Airport {
    uid: string;
    caption: string;
}

interface City {
    uid: string;
    caption: string;
}

interface Aircraft {
    uid: string;
    caption: string;
}

interface Airline {
    uid: string;
    caption: string;
    airlineCode: string;
}

interface ServiceDetails {
    freeCabinLuggage?: any;
    paidCabinLuggage?: any;
    tariffName: string;
    fareBasis: Record<string, string>;
    freeLuggage: Record<string, { nil: boolean }>;
    paidLuggage?: any;
}

interface Segment {
    classOfServiceCode: string;
    classOfService: ServiceStatus;
    departureAirport: Airport;
    departureCity: City;
    aircraft: Aircraft;
    travelDuration: number;
    arrivalCity: City;
    arrivalDate: string;
    flightNumber: string;
    techStopInfos: any[];
    departureDate: string;
    stops: number;
    servicesDetails: ServiceDetails;
    airline: Airline;
    starting: boolean;
    arrivalAirport: Airport;
}

interface Leg {
    duration: number;
    segments: Segment[];
}

interface ExchangeInfo {
    exchangeableBeforeDeparture: boolean;
    exchangeBeforeDeparture: Money;
    exchangeableAfterDeparture: boolean;
    exchangeAfterDeparture: Money;
}

interface RefundInfo {
    refundableBeforeDeparture: boolean;
    refundableAfterDeparture: boolean;
}

interface Exchange {
    ADULT: ExchangeInfo;
}

interface Refund {
    ADULT: RefundInfo;
}

interface Seat {
    count: number;
    type: PassengerType;
}

interface AirlineAlliance {
    uid: string;
    caption: string;
}

interface Flight {
    carrier: Airline;
    price: {
        total: Money;
        totalFeeAndTaxes: Money;
        rates: Rate;
        passengerPrices: PassengerPrice[];
    };
    servicesStatuses: {
        baggage: ServiceStatus;
        exchange: ServiceStatus;
        refund: ServiceStatus;
    };
    legs: Leg[];
    airlineAlliance: AirlineAlliance;
    exchange: Exchange;
    refund: Refund;
    isTripartiteContractDiscountApplied: boolean;
    international: boolean;
    seats: Seat[];
}

interface FlightResponse {
    hasExtendedFare: boolean;
    flight: Flight;
    flightToken: string;
}

interface Carrier {
    uid: string;
    caption: string;
    airlineCode: string;
}


interface BestFlightsFlight {
    carrier: Carrier;
    price: Money;
}

interface BestFlights {
    bestFlights: BestFlightsFlight[];
}

interface BestPrices {
    ONE_CONNECTION: BestFlights;
    DIRECT: BestFlights;
}
