"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Birds_1 = require("./Birds");
class EagleAdapter {
    constructor(eagle) {
        this.eagle = eagle;
    }
    quack() {
        this.eagle.screech();
    }
    fly() {
        this.eagle.fly();
    }
}
const testDuck = (duck) => {
    duck.quack();
    duck.fly();
};
const duck = new Birds_1.MallardDuck();
const eagle = new Birds_1.WildEagle();
const eagleAdapter = new EagleAdapter(eagle);
eagle.screech();
eagle.fly();
testDuck(duck);
testDuck(eagleAdapter);
