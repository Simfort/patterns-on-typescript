"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PizzaStore {
    constructor(factory) {
        this.factory = factory;
    }
    orderPizza(type) {
        let pizza;
        pizza = this.factory.createPizza(type);
        return pizza;
    }
}
exports.default = PizzaStore;
