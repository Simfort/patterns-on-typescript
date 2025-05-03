"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chair = exports.Table = exports.Furniture = void 0;
const Factories_1 = require("./Factories");
class Furniture {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log(`Это ${this.name}`);
    }
}
exports.Furniture = Furniture;
class Table extends Furniture {
    constructor() {
        super("стол");
    }
}
exports.Table = Table;
class Chair extends Furniture {
    constructor() {
        super("стул");
    }
}
exports.Chair = Chair;
const tableFactory = new Factories_1.TableFactory();
const chairFactory = new Factories_1.ChairFactory();
const table = tableFactory.createFurniture();
const chair = chairFactory.createFurniture();
table.describe(); // Выводит: «Это стол»
chair.describe(); // Выводит: «Это стул»
