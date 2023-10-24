export interface IBox {
  material: string;
  maxWeight: number;
  produce: () => IBox;
}


export class Box implements IBox{
  constructor(public material: string, public maxWeight: number) {}
  produce(): IBox {
    return new Box(this.material, this.maxWeight);
  }
}