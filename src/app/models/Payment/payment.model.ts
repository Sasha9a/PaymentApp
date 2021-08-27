export class Payment {
  public id: number;
  public name: string;
  public sum: number;
  public discount: number;

  constructor(id: number, name: string, sum: number, discount: number) {
    this.id = id;
    this.name = name;
    this.sum = sum;
    this.discount = discount;
  }
}
