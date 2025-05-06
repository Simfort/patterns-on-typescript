import { MenuItem } from "./Menu";

export default class MenuIterator {
  items: MenuItem[];
  pos: number = 0;
  constructor(items: MenuItem[]) {
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
    } else {
      return true;
    }
  }
}
