"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasQuarterState = exports.NoQuarterState = exports.SoldOutState = exports.SoldState = void 0;
const GumballMachine_1 = __importDefault(require("./GumballMachine"));
class SoldState {
    constructor(gum) {
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
            this.gumballMachine.setState(GumballMachine_1.default.NO_QUARTER);
        }
        else {
            console.log("Ooops, out of gumballs!");
            this.gumballMachine.setState(GumballMachine_1.default.SOLD_OUT);
        }
    }
}
exports.SoldState = SoldState;
class SoldOutState {
    constructor(gum) {
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
exports.SoldOutState = SoldOutState;
class NoQuarterState {
    constructor(gum) {
        this.gumballMachine = gum;
    }
    insertQuarter() {
        console.log("You inserted a quarter");
        this.gumballMachine.setState(GumballMachine_1.default.HAS_QUARTER);
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
exports.NoQuarterState = NoQuarterState;
class HasQuarterState {
    constructor(gum) {
        this.gumballMachine = gum;
    }
    insertQuarter() {
        console.log("You can`t insert another quarter");
    }
    ejectQuarter() {
        console.log("Quarter returned");
        this.gumballMachine.setState(GumballMachine_1.default.NO_QUARTER);
    }
    turnCrank() {
        console.log("You turned...");
        this.gumballMachine.setState(GumballMachine_1.default.SOLD);
    }
    dispense() {
        console.log("No gumball dispensed");
    }
}
exports.HasQuarterState = HasQuarterState;
