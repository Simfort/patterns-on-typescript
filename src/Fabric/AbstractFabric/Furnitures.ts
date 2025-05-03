import { ChairFactory, TableFactory } from "./Factories";

export class Furniture {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  describe() {
    console.log(`Это ${this.name}`);
  }
}

export class Table extends Furniture {
  constructor() {
    super("стол");
  }
}

export class Chair extends Furniture {
  constructor() {
    super("стул");
  }
}

const tableFactory = new TableFactory();
const chairFactory = new ChairFactory();
const table = tableFactory.createFurniture();
const chair = chairFactory.createFurniture();
table.describe(); // Выводит: «Это стол»
chair.describe(); // Выводит: «Это стул»
