import {
  HasQuarterState,
  NoQuarterState,
  SoldOutState,
  SoldState,
  State,
} from "./State";

export default class GumballMachine {
  static SOLD_OUT: State;
  static NO_QUARTER: State;
  static HAS_QUARTER: State;
  static SOLD: State;

  state: State;
  count = 0;
  constructor(count: number) {
    GumballMachine.SOLD_OUT = new SoldOutState(this);
    GumballMachine.HAS_QUARTER = new HasQuarterState(this);
    GumballMachine.SOLD = new SoldState(this);
    GumballMachine.NO_QUARTER = new NoQuarterState(this);
    this.count = count;
    if (count > 0) {
      this.state = GumballMachine.NO_QUARTER;
    } else {
      this.state = GumballMachine.SOLD_OUT;
    }
  }
  insertQuarter() {
    this.state.insertQuarter();
  }
  ejectQuarter() {
    this.state.ejectQuarter();
  }
  turnCrank() {
    this.state.turnCrank();
    this.state.dispense();
  }
  setState(state: State) {
    this.state = state;
  }
  releaseBall() {
    console.log("A gumball comes rolling out the slot...");
    if (this.count != 0) {
      this.count = this.count - 1;
    }
  }
}

const gumball = new GumballMachine(5);

console.log(gumball);

gumball.insertQuarter();
gumball.turnCrank();

console.log(gumball);

gumball.insertQuarter();
gumball.turnCrank();
gumball.insertQuarter();
gumball.turnCrank();

console.log(gumball);
