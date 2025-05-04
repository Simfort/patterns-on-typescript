import { MallardDuck, WildEagle } from "./Birds";
import { Duck, Eagle } from "./Interfaces";

class EagleAdapter implements Duck {
  eagle: Eagle;
  constructor(eagle: Eagle) {
    this.eagle = eagle;
  }
  quack() {
    this.eagle.screech();
  }
  fly() {
    this.eagle.fly();
  }
}

const testDuck = (duck: Duck) => {
  duck.quack();
  duck.fly();
};

const duck = new MallardDuck();

const eagle = new WildEagle();
const eagleAdapter = new EagleAdapter(eagle);

eagle.screech();
eagle.fly();

testDuck(duck);

testDuck(eagleAdapter);
