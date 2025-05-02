import Beverage from "./Beverage";

export class Expresso extends Beverage {
  constructor() {
    super();
    this.description = "Expresso";
  }
  cost(): number {
    return 1.99;
  }
}

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "Dark Roast";
  }
  cost(): number {
    return 2.99;
  }
}

export class Decaf extends Beverage {
  constructor() {
    super();
    this.description = "Decaf";
  }
  cost(): number {
    return 0.99;
  }
}
