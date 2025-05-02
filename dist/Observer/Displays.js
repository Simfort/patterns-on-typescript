"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThirdPartyDisplay = exports.StatisticsDisplay = exports.CurrentConditionsDisplay = void 0;
const WeatherData_1 = __importDefault(require("./WeatherData"));
class CurrentConditionsDisplay extends WeatherData_1.default {
    constructor(weatherData) {
        super();
        this.temperature = 0;
        this.humidity = 0;
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    update(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }
    display() {
        console.log("Current conditions: " +
            this.temperature +
            "F degrees and " +
            this.humidity +
            "% humidity");
    }
}
exports.CurrentConditionsDisplay = CurrentConditionsDisplay;
class StatisticsDisplay extends WeatherData_1.default {
    update() { }
    display() {
        console.log(this.getTempure());
    }
}
exports.StatisticsDisplay = StatisticsDisplay;
class ThirdPartyDisplay extends WeatherData_1.default {
    update() { }
    display() {
        console.log(this.getTempure());
    }
}
exports.ThirdPartyDisplay = ThirdPartyDisplay;
const weatherData = new WeatherData_1.default();
const display = new CurrentConditionsDisplay(weatherData);
console.log(weatherData);
display.display();
weatherData.setMeasurements(12, 20, 1);
