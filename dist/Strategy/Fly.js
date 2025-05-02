"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyRocketPowered = exports.FlyNo = exports.FlyWithWings = void 0;
class FlyWithWings {
    fly() {
        console.log("I`m fly!");
    }
}
exports.FlyWithWings = FlyWithWings;
class FlyNo {
    fly() {
        console.log("I`m not fly!");
    }
}
exports.FlyNo = FlyNo;
class FlyRocketPowered {
    fly() {
        console.log("I`m fly so fast with rocket!!");
    }
}
exports.FlyRocketPowered = FlyRocketPowered;
