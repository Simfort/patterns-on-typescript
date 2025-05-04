import { Duck, Eagle } from "./Interfaces";

export class MallardDuck implements Duck {
  quack() {
    console.log(" I Mallard Duck Quaaaack!");
  }
  fly() {
    console.log(" Sorry i cant fly! ");
  }
}

export class WildEagle implements Eagle {
  screech() {
    console.log(" I EAGLE SCREEEEEEEEEEECH!");
  }
  fly() {
    console.log(" I AM SO FAST!");
  }
}
