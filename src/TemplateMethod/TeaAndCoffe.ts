class CaffeinBeverage {
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }
  brew() {}
  addCondiments() {}
  boilWater() {
    console.log("Boiling water");
  }
  pourInCup() {
    console.log("Pouring into cup");
  }
}

export class Coffee extends CaffeinBeverage {
  brew() {
    console.log("Dripping Coffee through filter");
  }

  addCondiments() {
    console.log("Adding Sugar and Milk");
  }
}

export class Tea extends CaffeinBeverage {
  brew() {
    console.log("Steeping the tea");
  }

  addCondiments() {
    console.log("Adding Lemon");
  }
}
