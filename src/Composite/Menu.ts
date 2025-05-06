import MenuComponent from "./MenuComponent";

export class MenuItem extends MenuComponent {
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

export class Menu extends MenuComponent {
  menuComponents: MenuComponent[] = [];
  name: string;
  desc: string;
  constructor(name: string, desc: string) {
    super();
    this.name = name;
    this.desc = desc;
  }
  add(menuComponent: MenuComponent) {
    this.menuComponents.push(menuComponent);
  }
  remove(menuComponent: MenuComponent) {
    const deleteIn = this.menuComponents.findIndex(
      (val) => val.getName() == menuComponent.getName()
    );
    this.menuComponents = this.menuComponents.slice(deleteIn, 1);
  }
  getName(): string {
    return this.name;
  }
  getChild(ind: number): MenuComponent {
    return this.menuComponents[ind];
  }
  getDesc(): string {
    return this.desc;
  }
  print(): void {
    console.log("\n" + this.getName());
    console.log(", " + this.getDesc());
    console.log("--------------------");
    for (let item of this.menuComponents) {
      item.print();
    }
  }
}

const dinm = new Menu("Dinner Menu", "Dinner Menu is so tasty and hot");
const panm = new Menu("Pancake Menu", "Pancake Menu is so tasty and sweet");
dinm.add(new MenuItem("Borsh", "It s russia food tasty", true, 1.99));
dinm.add(
  new MenuItem("Scezar", "It s very vegetarian food and yummy", true, 1.19)
);
panm.add(new MenuItem("Oladia", "It  russia food is sweet", true, 0.89));
panm.add(new MenuItem("Pancake", "It  food is so sweet ", true, 0.99));

dinm.print();
panm.print();
