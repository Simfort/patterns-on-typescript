"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Elise_instances, _Elise_printMenu;
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_1 = require("./Menu");
class Elise {
    constructor(pancakeHouseMenu, dinnerMenu) {
        _Elise_instances.add(this);
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinnerMenu = dinnerMenu;
    }
    printMenu() {
        const pancakeIterator = this.pancakeHouseMenu.createIterator();
        const dinerIterator = this.dinnerMenu.createIterator();
        console.log("MENU\n----\nBREAKFAST");
        __classPrivateFieldGet(this, _Elise_instances, "m", _Elise_printMenu).call(this, pancakeIterator);
        console.log("MENU\n----\nLUNCH");
        __classPrivateFieldGet(this, _Elise_instances, "m", _Elise_printMenu).call(this, dinerIterator);
    }
}
_Elise_instances = new WeakSet(), _Elise_printMenu = function _Elise_printMenu(iterator) {
    while (iterator.hasNext()) {
        const menuItem = iterator.next();
        console.log(menuItem.name + ", ");
        console.log(menuItem.price + " -- ");
        console.log(menuItem.description + "\n");
    }
};
const panh = new Menu_1.PancakeHouseMenu();
panh.addItem("Pancake", "It s tasty", true, 0.98);
panh.addItem("Oladia", "It s sweet", true, 0.98);
panh.addItem("Blin", "It s russia and sweet", true, 0.98);
const dinm = new Menu_1.DinnerMenu();
dinm.addItem("Borsh", "Is so russia", true, 1.22);
dinm.addItem("Scezar", "It s very cool imperator", true, 1.0);
const elise = new Elise(panh, dinm);
elise.printMenu();
