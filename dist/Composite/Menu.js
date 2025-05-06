"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.MenuItem = void 0;
const MenuComponent_1 = __importDefault(require("./MenuComponent"));
class MenuItem extends MenuComponent_1.default {
    constructor(name, description, vegetarian, price) {
        super();
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getDesc() {
        return this.description;
    }
    getPrice() {
        return this.price;
    }
    isVegetarian() {
        return this.vegetarian;
    }
    print() {
        console.log(" " + this.getName());
        if (this.isVegetarian()) {
            console.log("(v)");
        }
        console.log(", " + this.getPrice());
        console.log("    -- " + this.getDesc());
    }
}
exports.MenuItem = MenuItem;
class Menu extends MenuComponent_1.default {
    constructor(name, desc) {
        super();
        this.menuComponents = [];
        this.name = name;
        this.desc = desc;
    }
    add(menuComponent) {
        this.menuComponents.push(menuComponent);
    }
    remove(menuComponent) {
        const deleteIn = this.menuComponents.findIndex((val) => val.getName() == menuComponent.getName());
        this.menuComponents = this.menuComponents.slice(deleteIn, 1);
    }
    getName() {
        return this.name;
    }
    getChild(ind) {
        return this.menuComponents[ind];
    }
    getDesc() {
        return this.desc;
    }
    print() {
        console.log("\n" + this.getName());
        console.log(", " + this.getDesc());
        console.log("--------------------");
        for (let item of this.menuComponents) {
            item.print();
        }
    }
}
exports.Menu = Menu;
const dinm = new Menu("Dinner Menu", "Dinner Menu is so tasty and hot");
const panm = new Menu("Pancake Menu", "Pancake Menu is so tasty and sweet");
dinm.add(new MenuItem("Borsh", "It s russia food tasty", true, 1.99));
dinm.add(new MenuItem("Scezar", "It s very vegetarian food and yummy", true, 1.19));
panm.add(new MenuItem("Oladia", "It  russia food is sweet", true, 0.89));
panm.add(new MenuItem("Pancake", "It  food is so sweet ", true, 0.99));
dinm.print();
panm.print();
