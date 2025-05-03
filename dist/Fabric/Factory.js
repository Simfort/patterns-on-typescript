"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Games_1 = require("./Games");
class GameFactory {
    createFactory(type) {
        if (type == "fantasy") {
            return new Games_1.GodOfWar();
        }
        else if (type == "RPG") {
            return new Games_1.CallOfDuty();
        }
    }
}
exports.default = GameFactory;
const factory = new GameFactory();
const cod = factory.createFactory("RPG");
cod === null || cod === void 0 ? void 0 : cod.info();
