// without Director
// type Material = "cardboard"| "plastics";
  // material?: Material;
  // label?: string;
  // color?: string;
  // hardened?: boolean;
// box?: any;

export default class Box {


  constructor() {
      this.box = new Box();
  }

  choiseMaterial(material) {
    this.box.material = material;
    return this;
  }

  addLabel(label) {
    this.box.label = label;
    return this;
  }

  colorize(color) {
    this.box.color = color;
    return this;
  }

  strengthen(hardened) {
    this.box.hardened = hardened;
    return this;
  }

  build() {
    return this.box;
  }
}


