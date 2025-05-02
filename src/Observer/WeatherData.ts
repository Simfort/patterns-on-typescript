import { Subject, Observer } from "./Interfaces";

export default class WeatherData implements Subject {
  observers: Observer[] = [];
  temperature: number = 0;
  humidity: number = 0;
  pressure: number = 0;

  registerObserver(o: Observer) {
    this.observers.push(o);
  }
  removeObserver(o: Observer) {
    const removeInd = this.observers.findIndex((val) => val === o);
    this.observers = this.observers.slice(removeInd, 1);
  }
  notifyObservers() {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].update(this.temperature, this.humidity, this.pressure);
    }
  }

  getTempure() {}
  getHumidity() {}
  getPressure() {}
  measurementsChanged() {
    this.notifyObservers();
  }
  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
