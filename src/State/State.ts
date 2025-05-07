import GumballMachine from "./GumballMachine";

export interface State {
  insertQuarter: () => void;
  ejectQuarter: () => void;
  turnCrank: () => void;
  dispense: () => void;
}

export class SoldState implements State {
  gumballMachine: GumballMachine;
  constructor(gum: GumballMachine) {
    this.gumballMachine = gum;
  }
  insertQuarter() {
    console.log("Please wait, we`re already giving you a gumball");
  }
  ejectQuarter() {
    console.log("Sorry, you already turned the crank");
  }
  turnCrank() {
    console.log("Turning twice doesn`t get you another gumball!");
  }
  dispense() {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.count > 0) {
      this.gumballMachine.setState(GumballMachine.NO_QUARTER);
    } else {
      console.log("Ooops, out of gumballs!");
      this.gumballMachine.setState(GumballMachine.SOLD_OUT);
    }
  }
}
export class SoldOutState implements State {
  gumballMachine: GumballMachine;
  constructor(gum: GumballMachine) {
    this.gumballMachine = gum;
  }
  insertQuarter() {
    console.log("You inserted a quarter");
  }
  ejectQuarter() {
    console.log("You haven`t inserted a quarter");
  }
  turnCrank() {
    console.log("You turned, but there`s no  quarter");
  }
  dispense() {
    console.log("You need to play first");
  }
}
export class NoQuarterState implements State {
  gumballMachine: GumballMachine;
  constructor(gum: GumballMachine) {
    this.gumballMachine = gum;
  }
  insertQuarter() {
    console.log("You inserted a quarter");
    this.gumballMachine.setState(GumballMachine.HAS_QUARTER);
  }
  ejectQuarter() {
    console.log("You haven`t inserted a quarter");
  }
  turnCrank() {
    console.log("You turned, but there`s no  quarter");
  }
  dispense() {
    console.log("You need to play first");
  }
}
export class HasQuarterState implements State {
  gumballMachine: GumballMachine;
  constructor(gum: GumballMachine) {
    this.gumballMachine = gum;
  }
  insertQuarter() {
    console.log("You can`t insert another quarter");
  }
  ejectQuarter() {
    console.log("Quarter returned");
    this.gumballMachine.setState(GumballMachine.NO_QUARTER);
  }
  turnCrank() {
    console.log("You turned...");
    this.gumballMachine.setState(GumballMachine.SOLD);
  }
  dispense() {
    console.log("No gumball dispensed");
  }
}
