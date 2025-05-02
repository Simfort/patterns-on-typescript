import { FlyBehaivor } from "./Duck";

export class FlyWithWings implements FlyBehaivor {
  fly() {
    console.log("I`m fly!");
  }
}

export class FlyNo implements FlyBehaivor {
  fly() {
    console.log("I`m not fly!");
  }
}

export class FlyRocketPowered implements FlyBehaivor {
  fly() {
    console.log("I`m fly so fast with rocket!!");
  }
}
