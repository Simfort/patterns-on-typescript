import Duck, { FlyBehaivor, QuackBehaivor } from "./Duck";
import { FlyRocketPowered } from "./Fly";
import { Quack } from "./Qucks";

class MallardDuck extends Duck {
  quackBehaivor: QuackBehaivor = new Quack();
  flyBehaivor: FlyBehaivor = new FlyRocketPowered();

  display(): void {
    console.log("I`m a real Mallard duck");
  }
}

const mallardDuck = new MallardDuck();

mallardDuck.performQuack();
mallardDuck.performFly();
