"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const State_1 = require("./State");
class GumballMachine {
    constructor(count) {
        this.count = 0;
        GumballMachine.SOLD_OUT = new State_1.SoldOutState(this);
        GumballMachine.HAS_QUARTER = new State_1.HasQuarterState(this);
        GumballMachine.SOLD = new State_1.SoldState(this);
        GumballMachine.NO_QUARTER = new State_1.NoQuarterState(this);
        this.count = count;
        if (count > 0) {
            this.state = GumballMachine.NO_QUARTER;
        }
        else {
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
    setState(state) {
        this.state = state;
    }
    releaseBall() {
        console.log("A gumball comes rolling out the slot...");
        if (this.count != 0) {
            this.count = this.count - 1;
        }
    }
}
exports.default = GumballMachine;
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
