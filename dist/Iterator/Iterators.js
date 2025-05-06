"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MenuIterator {
    constructor(items) {
        this.pos = 0;
        this.items = items;
    }
    next() {
        const menuItem = this.items[this.pos];
        this.pos++;
        return menuItem;
    }
    hasNext() {
        if (this.pos >= this.items.length || this.items[this.pos] == null) {
            return false;
        }
        else {
            return true;
        }
    }
}
exports.default = MenuIterator;
