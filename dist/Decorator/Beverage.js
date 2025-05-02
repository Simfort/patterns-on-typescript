"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Beverage {
    constructor() {
        this.description = "Unknown Beverage";
    }
    getDescription() {
        return this.description;
    }
    cost() {
        return 0;
    }
}
exports.default = Beverage;
