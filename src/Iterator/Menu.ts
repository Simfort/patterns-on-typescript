import MenuIterator from "./Iterators";

export class MenuItem {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;
  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }
}

export class PancakeHouseMenu {
  menuItems: MenuItem[] = [];
  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.push(menuItem);
  }
  createIterator() {
    return new MenuIterator(this.menuItems);
  }
}

export class DinnerMenu {
  static MAX_ITEMS = 6;
  len: number = 0;
  menuItems: MenuItem[] = new Array(DinnerMenu.MAX_ITEMS);
  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    if (this.menuItems.length >= DinnerMenu.MAX_ITEMS) {
      console.log("Sorry,menu is full!");
    } else {
      this.menuItems.push(menuItem);
    }
  }
  createIterator() {
    return new MenuIterator(this.menuItems);
  }
}
