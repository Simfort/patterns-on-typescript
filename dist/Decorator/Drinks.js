"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decaf = exports.DarkRoast = exports.Expresso = void 0;
const Beverage_1 = __importDefault(require("./Beverage"));
class Expresso extends Beverage_1.default {
    constructor() {
        super();
        this.description = "Expresso";
    }
    cost() {
        return 1.99;
    }
}
exports.Expresso = Expresso;
class DarkRoast extends Beverage_1.default {
    constructor() {
        super();
        this.description = "Dark Roast";
    }
    cost() {
        return 2.99;
    }
}
exports.DarkRoast = DarkRoast;
class Decaf extends Beverage_1.default {
    constructor() {
        super();
        this.description = "Decaf";
    }
    cost() {
        return 0.99;
    }
}
exports.Decaf = Decaf;
