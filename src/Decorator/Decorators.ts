import Beverage from "./Beverage";
import { DarkRoast, Expresso } from "./Drinks";

export default class CondimentDecorator {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }
  getDescription(): string {
    return this.beverage.getDescription();
  }
}

export class Milk {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }
  getDescription(): string {
    return this.beverage?.getDescription() + ", Milk";
  }

  cost(): number {
    return this.beverage!.cost() + 0.6;
  }
}

export class Mocha {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }
  getDescription(): string {
    return this.beverage?.getDescription() + ", Mocha";
  }

  cost(): number {
    return this.beverage!.cost() + 0.2;
  }
}

export class Soy {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }
  getDescription(): string {
    return this.beverage?.getDescription() + ", Soy";
  }

  cost(): number {
    return this.beverage!.cost() + 0.4;
  }
}

const beverage = new Expresso();
console.log(beverage.getDescription() + " $" + beverage.cost());

let beverage2 = new DarkRoast();
console.log(beverage2, beverage2.getDescription());
beverage2 = new Mocha(beverage2);
console.log(beverage2, beverage2.getDescription());
beverage2 = new Mocha(beverage2);
console.log(beverage2, beverage2.getDescription());
beverage2 = new Soy(beverage2);

console.log(beverage2, beverage2.getDescription());
console.log(beverage2.getDescription() + " $" + beverage2.cost());
