const wollyPets = ["cat", "dog", "rat"] as const;
type WoollyPet = (typeof wollyPets)[number];

const flyingPets = ['bird', 'bat'] as const;
type FlyingPet = typeof flyingPets[number]

type Pet = WoollyPet | FlyingPet;

const colors = ["black", "gray", "ginger", "tricolor"] as const;
type Color = (typeof colors)[number];

type PetAnimal = WoollyPetAnimal | FlyingPetAnimal;

function getRandomColor(): Color {
  return colors[Math.floor(Math.random() * wollyPets.length)];
}

interface IPetAnimal {
  type: Pet;
  color: string;
}

export function petFactory(type: Pet, name: string):PetAnimal|undefined {
    if (wollyPets.includes(type as WoollyPet)) {
    return new WollyPetFactory().create(type, name)
    }
    if (flyingPets.includes(type as FlyingPet)) {
      return new FlyingPetFactory().create(type, name);
    }
}

class WollyPetFactory {
  create(type: Pet, name: string): WoollyPetAnimal {
    if (type === "cat") {
      const pet = new WoollyPetAnimal(type, name, getRandomColor());
      pet.says = (): void => {
        console.log("Meow");
      };
      return pet;
    }
    if (type === "dog") {
      const pet = new WoollyPetAnimal(type, name, getRandomColor());
      pet.says = (): void => {
        console.log("Bark");
      };
      return pet;
    }
    return new WoollyPetAnimal("rat", "Lariska", 'gray');
  }
}

 class FlyingPetFactory {
  create(type: Pet, name: string): FlyingPetAnimal {
    if (type === "bird") {
      const pet = new FlyingPetAnimal(type, name, getRandomColor());
      pet.says = (): void => {
        console.log("Chirp");
      };
      return pet;
    }
    
      const pet = new FlyingPetAnimal(type, name, 'black');
      pet.says = (): void => {
        console.log("...");
      };
      return pet;
    
  }
}

class WoollyPetAnimal implements IPetAnimal {
  constructor(public type: Pet, public name: string, public color: Color) {}
  says(): void {
    console.log("Squeak");
  }
}

class FlyingPetAnimal implements IPetAnimal {
  constructor(public type: Pet, public name: string, public color: Color) {}
  says(): void {
    console.log("Squeak");
  }
}


