import { CallOfDuty, GodOfWar } from "./Games";

export default class GameFactory {
  createFactory(type: "fantasy" | "RPG") {
    if (type == "fantasy") {
      return new GodOfWar();
    } else if (type == "RPG") {
      return new CallOfDuty();
    }
  }
}

const factory = new GameFactory();
const cod = factory.createFactory("RPG");
cod?.info();
