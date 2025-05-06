import MenuIterator from "./Iterators";
import { PancakeHouseMenu, DinnerMenu } from "./Menu";
class Elise {
  pancakeHouseMenu: PancakeHouseMenu;
  dinnerMenu: DinnerMenu;
  constructor(pancakeHouseMenu: PancakeHouseMenu, dinnerMenu: DinnerMenu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinnerMenu = dinnerMenu;
  }
  printMenu() {
    const pancakeIterator = this.pancakeHouseMenu.createIterator();
    const dinerIterator = this.dinnerMenu.createIterator();
    console.log("MENU\n----\nBREAKFAST");
    this.#printMenu(pancakeIterator);
    console.log("MENU\n----\nLUNCH");
    this.#printMenu(dinerIterator);
  }
  #printMenu(iterator: MenuIterator) {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(menuItem.name + ", ");
      console.log(menuItem.price + " -- ");
      console.log(menuItem.description + "\n");
    }
  }
}

const panh = new PancakeHouseMenu();
panh.addItem("Pancake", "It s tasty", true, 0.98);
panh.addItem("Oladia", "It s sweet", true, 0.98);
panh.addItem("Blin", "It s russia and sweet", true, 0.98);
const dinm = new DinnerMenu();
dinm.addItem("Borsh", "Is so russia", true, 1.22);
dinm.addItem("Scezar", "It s very cool imperator", true, 1.0);

const elise = new Elise(panh, dinm);
elise.printMenu();
