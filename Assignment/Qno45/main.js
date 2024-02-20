"use strict";
//Question no 45
function carInfo(manufacturer, model, ...extras) {
    const car = { manufacturer, model };
    extras.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Example usage:
const carData = carInfo('Honda', 'Civic', ['color', 'white'], ['year', 2020]);
console.log(carData);
