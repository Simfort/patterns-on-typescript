import SimplePizzaFactory from "./SimplePizzaFactory";

export default class PizzaStore {
  factory: SimplePizzaFactory;
  constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }
  orderPizza(type: string) {
    let pizza;
    pizza = this.factory.createPizza(type);
    return pizza;
  }
}
