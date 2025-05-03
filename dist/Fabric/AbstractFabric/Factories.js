"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChairFactory = exports.TableFactory = void 0;
const Furnitures_1 = require("./Furnitures");
class FurnitureFactory {
    createFurniture() {
        throw new Error("Метод createFurniture должен быть переопределен в подклассах");
    }
}
class TableFactory extends FurnitureFactory {
    createFurniture() {
        return new Furnitures_1.Table();
    }
}
exports.TableFactory = TableFactory;
class ChairFactory extends FurnitureFactory {
    createFurniture() {
        return new Furnitures_1.Chair();
    }
}
exports.ChairFactory = ChairFactory;
