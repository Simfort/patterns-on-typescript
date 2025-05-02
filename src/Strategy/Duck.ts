export interface FlyBehaivor {
  fly: () => void;
}

export interface QuackBehaivor {
  quack: () => void;
}

export default abstract class Duck {
  flyBehaivor: FlyBehaivor;
  quackBehaivor: QuackBehaivor;
  constructor() {
    this.flyBehaivor = {
      fly: () => {},
    };
    this.quackBehaivor = {
      quack: () => {},
    };
  }
  display() {}
  performFly() {
    this.flyBehaivor.fly();
  }
  performQuack() {
    this.quackBehaivor.quack();
  }
  swim() {
    console.log("All ducks float, even decoys!");
  }
  setQuackBehaivor(qb: QuackBehaivor) {
    this.quackBehaivor = qb;
  }
  setFlyBehaivor(fb: FlyBehaivor) {
    this.flyBehaivor = fb;
  }
}
