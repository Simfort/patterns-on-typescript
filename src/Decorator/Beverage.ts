export default abstract class Beverage {
  description: string = "Unknown Beverage";

  getDescription() {
    return this.description;
  }
  cost(): number {
    return 0;
  }
}
