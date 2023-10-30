export class Cat {
    feedCat() {
        console.log("munch-munch");
    }
}

export class Dog {
  feedDog() {
    console.log("crunch-crunch");
  }
}

export class DogAdapter {
    feeder: Dog;
    constructor(feeder:Dog) {
        this.feeder = feeder;
    }

    feedCat() {
        this.feeder.feedDog();
    }
}

export class Pet {
    feedPet(animal) {
        animal.feedCat()
    }
}