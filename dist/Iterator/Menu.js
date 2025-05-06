"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinnerMenu = exports.PancakeHouseMenu = exports.MenuItem = void 0;
const Iterators_1 = __importDefault(require("./Iterators"));
class MenuItem {
    constructor(name, description, vegetarian, price) {
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }
}
exports.MenuItem = MenuItem;
class PancakeHouseMenu {
    constructor() {
        this.menuItems = [];
    }
    addItem(name, description, vegetarian, price) {
        const menuItem = new MenuItem(name, description, vegetarian, price);
        this.menuItems.push(menuItem);
    }
    createIterator() {
        return new Iterators_1.default(this.menuItems);
    }
}
exports.PancakeHouseMenu = PancakeHouseMenu;
class DinnerMenu {
    constructor() {
        this.len = 0;
        this.menuItems = new Array(DinnerMenu.MAX_ITEMS);
    }
    addItem(name, description, vegetarian, price) {
        const menuItem = new MenuItem(name, description, vegetarian, price);
        if (this.menuItems.length >= DinnerMenu.MAX_ITEMS) {
            console.log("Sorry,menu is full!");
        }
        else {
            this.menuItems.push(menuItem);
        }
    }
    createIterator() {
        return new Iterators_1.default(this.menuItems);
    }
}
exports.DinnerMenu = DinnerMenu;
DinnerMenu.MAX_ITEMS = 6;
