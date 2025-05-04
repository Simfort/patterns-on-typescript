"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commands_1 = require("./Commands");
class GarageDoorOpenCommand {
    constructor(garage) {
        this.garage = garage;
    }
    execute() {
        this.garage.up();
    }
}
class LightOnCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.on();
    }
}
class SimpleRemoteControl {
    constructor() {
        this.slot = null;
    }
    setCommand(command) {
        this.slot = command;
    }
    buttonWasPressed(args) {
        var _a;
        (_a = this.slot) === null || _a === void 0 ? void 0 : _a.execute(args);
    }
}
const remote = new SimpleRemoteControl();
const light = new Commands_1.Light();
const garageDoor = new Commands_1.GarageDoor();
const garageOpen = new GarageDoorOpenCommand(garageDoor);
const lightOn = new LightOnCommand(light);
remote.setCommand(garageOpen);
remote.buttonWasPressed();
remote.setCommand(lightOn);
remote.buttonWasPressed();
