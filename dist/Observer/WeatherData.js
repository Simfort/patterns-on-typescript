"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WeatherData {
    constructor() {
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }
    registerObserver(o) {
        this.observers.push(o);
    }
    removeObserver(o) {
        const removeInd = this.observers.findIndex((val) => val === o);
        this.observers = this.observers.slice(removeInd, 1);
    }
    notifyObservers() {
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].update(this.temperature, this.humidity, this.pressure);
        }
    }
    getTempure() { }
    getHumidity() { }
    getPressure() { }
    measurementsChanged() {
        this.notifyObservers();
    }
    setMeasurements(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}
exports.default = WeatherData;
