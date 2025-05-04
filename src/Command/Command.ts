import { GarageDoor, Light } from "./Commands";
import { Command } from "./Interfaces";

class GarageDoorOpenCommand implements Command {
  garage: GarageDoor;
  constructor(garage: GarageDoor) {
    this.garage = garage;
  }
  execute() {
    this.garage.up();
  }
}

class LightOnCommand implements Command {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute() {
    this.light.on();
  }
}

class SimpleRemoteControl {
  slot: Command | null = null;

  setCommand(command: Command) {
    this.slot = command;
  }
  buttonWasPressed(args?: string) {
    this.slot?.execute(args);
  }
}

const remote = new SimpleRemoteControl();
const light = new Light();
const garageDoor = new GarageDoor();
const garageOpen = new GarageDoorOpenCommand(garageDoor);
const lightOn = new LightOnCommand(light);

remote.setCommand(garageOpen);
remote.buttonWasPressed();
remote.setCommand(lightOn);
remote.buttonWasPressed();
