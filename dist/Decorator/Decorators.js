"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soy = exports.Mocha = exports.Milk = void 0;
const Drinks_1 = require("./Drinks");
class CondimentDecorator {
    constructor(beverage) {
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription();
    }
}
exports.default = CondimentDecorator;
class Milk {
    constructor(beverage) {
        this.beverage = beverage;
    }
    getDescription() {
        var _a;
        return ((_a = this.beverage) === null || _a === void 0 ? void 0 : _a.getDescription()) + ", Milk";
    }
    cost() {
        return this.beverage.cost() + 0.6;
    }
}
exports.Milk = Milk;
class Mocha {
    constructor(beverage) {
        this.beverage = beverage;
    }
    getDescription() {
        var _a;
        return ((_a = this.beverage) === null || _a === void 0 ? void 0 : _a.getDescription()) + ", Mocha";
    }
    cost() {
        return this.beverage.cost() + 0.2;
    }
}
exports.Mocha = Mocha;
class Soy {
    constructor(beverage) {
        this.beverage = beverage;
    }
    getDescription() {
        var _a;
        return ((_a = this.beverage) === null || _a === void 0 ? void 0 : _a.getDescription()) + ", Soy";
    }
    cost() {
        return this.beverage.cost() + 0.4;
    }
}
exports.Soy = Soy;
const beverage = new Drinks_1.Expresso();
console.log(beverage.getDescription() + " $" + beverage.cost());
let beverage2 = new Drinks_1.DarkRoast();
console.log(beverage2, beverage2.getDescription());
beverage2 = new Mocha(beverage2);
console.log(beverage2, beverage2.getDescription());
beverage2 = new Mocha(beverage2);
console.log(beverage2, beverage2.getDescription());
beverage2 = new Soy(beverage2);
console.log(beverage2, beverage2.getDescription());
console.log(beverage2.getDescription() + " $" + beverage2.cost());
