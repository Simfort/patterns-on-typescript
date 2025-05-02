"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Duck {
    constructor() {
        this.flyBehaivor = {
            fly: () => { },
        };
        this.quackBehaivor = {
            quack: () => { },
        };
    }
    display() { }
    performFly() {
        this.flyBehaivor.fly();
    }
    performQuack() {
        this.quackBehaivor.quack();
    }
    swim() {
        console.log("All ducks float, even decoys!");
    }
    setQuackBehaivor(qb) {
        this.quackBehaivor = qb;
    }
    setFlyBehaivor(fb) {
        this.flyBehaivor = fb;
    }
}
exports.default = Duck;
