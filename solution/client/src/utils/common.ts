
export const dateToString = (date:string) => {
    const dateObj = new Date(date);
    const months = ["янв.", "фев.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сен.", "окт.", "ноя.", "дек."];
    const weekday = ["вт", "ср", "чт", "пт", "сб", "вс", "пн"];
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const weekdayName = weekday[dateObj.getDay()];
    const hours = `0${dateObj.getHours()}`.slice(-2);
    const minutes = `0${dateObj.getMinutes()}`.slice(-2);
    return [`${hours}:${minutes}`, `${day} ${month} ${weekdayName}`];
};