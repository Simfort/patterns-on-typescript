"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    constructor() {
        this.num = 0;
    }
    static getInstanece() {
        if (this.unqiueInstance == null) {
            this.unqiueInstance = new Singleton();
        }
        return this.unqiueInstance;
    }
    plusNum(num) {
        this.num += num;
        return this.num;
    }
    minusNum(num) {
        this.num -= num;
        return this.num;
    }
}
exports.default = Singleton;
const singleton = Singleton.getInstanece();
const singleton2 = Singleton.getInstanece();
singleton.plusNum(12);
singleton.minusNum(1);
console.log(singleton.num);
console.log(singleton2.num);
