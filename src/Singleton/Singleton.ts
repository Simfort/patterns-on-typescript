export default class Singleton {
  private static unqiueInstance: Singleton;
  num: number = 0;
  private constructor() {}
  static getInstanece(): Singleton {
    if (this.unqiueInstance == null) {
      this.unqiueInstance = new Singleton();
    }
    return this.unqiueInstance;
  }
  plusNum(num: number) {
    this.num += num;
    return this.num;
  }
  minusNum(num: number) {
    this.num -= num;
    return this.num;
  }
}

const singleton = Singleton.getInstanece();
const singleton2 = Singleton.getInstanece();
singleton.plusNum(12);
singleton.minusNum(1);
console.log(singleton.num);
console.log(singleton2.num);
