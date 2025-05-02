import { QuackBehaivor } from "./Duck";

export class Quack implements QuackBehaivor {
  quack() {
    console.log("Quack");
  }
}
export class MuteQuack implements QuackBehaivor {
  quack() {
    console.log(" << Silence >> ");
  }
}
