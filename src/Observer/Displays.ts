import { DisplayElement, Observer, Subject } from "./Interfaces";
import WeatherData from "./WeatherData";

export class CurrentConditionsDisplay
  extends WeatherData
  implements DisplayElement, Observer
{
  temperature: number = 0;
  humidity: number = 0;
  weatherData: Subject | undefined;
  constructor(weatherData: Subject) {
    super();
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }
  update(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }
  display() {
    console.log(
      "Current conditions: " +
        this.temperature +
        "F degrees and " +
        this.humidity +
        "% humidity"
    );
  }
}

export class StatisticsDisplay
  extends WeatherData
  implements DisplayElement, Observer
{
  update() {}
  display() {
    console.log(this.getTempure());
  }
}
export class ThirdPartyDisplay
  extends WeatherData
  implements DisplayElement, Observer
{
  update() {}
  display() {
    console.log(this.getTempure());
  }
}

const weatherData = new WeatherData();
const display = new CurrentConditionsDisplay(weatherData);
console.log(weatherData);
display.display();
weatherData.setMeasurements(12, 20, 1);
