import { Chair, Table } from "./Furnitures";

class FurnitureFactory {
  createFurniture() {
    throw new Error(
      "Метод createFurniture должен быть переопределен в подклассах"
    );
  }
}

export class TableFactory extends FurnitureFactory {
  createFurniture() {
    return new Table();
  }
}

export class ChairFactory extends FurnitureFactory {
  createFurniture() {
    return new Chair();
  }
}
