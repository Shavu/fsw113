// This script should return the results of a function that converts the temperature provided by the api (Kelvin).
// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade.

export function localTemp(kelvin, country) {
    if (country == "US") {
        return `${(9 / 5 * (kelvin - 273.15) + 32).toFixed(0)}F`;
    } else {
        return `${(kelvin - 273.15).toFixed(0)}C`;
    }
}