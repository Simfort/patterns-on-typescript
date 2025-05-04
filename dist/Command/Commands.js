"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GarageDoor = exports.Light = void 0;
class Light {
    on() {
        console.log("Light is on");
    }
    off() {
        console.log("Light is off");
    }
}
exports.Light = Light;
class GarageDoor {
    up() {
        console.log("Garage up");
    }
    down() {
        console.log("Garage down");
    }
    stop() {
        console.log("Garage stop");
    }
}
exports.GarageDoor = GarageDoor;
