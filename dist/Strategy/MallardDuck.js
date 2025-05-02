"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Duck_1 = __importDefault(require("./Duck"));
const Fly_1 = require("./Fly");
const Qucks_1 = require("./Qucks");
class MallardDuck extends Duck_1.default {
    constructor() {
        super(...arguments);
        this.quackBehaivor = new Qucks_1.Quack();
        this.flyBehaivor = new Fly_1.FlyRocketPowered();
    }
    display() {
        console.log("I`m a real Mallard duck");
    }
}
const mallardDuck = new MallardDuck();
mallardDuck.performQuack();
mallardDuck.performFly();
