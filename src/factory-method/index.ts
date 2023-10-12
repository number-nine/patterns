const pets = ["cat", "dog", "rat"] as const;
type Pet = (typeof pets)[number];

const colors = ["black", "gray", "ginger", "tricolor"] as const;
type Color = (typeof colors)[number];

function getRandomColor(): Color {
  return colors[Math.floor(Math.random() * pets.length)];
}

interface IPetAnimal {
  type: Pet;
  color: string;
}

export class PetFactory {
  create(type: Pet, name: string): WollyPetAnimal {
    if (type === "cat") {
      const pet = new WollyPetAnimal(type, name, getRandomColor());
      pet.says = (): void => {
        console.log("Meow");
      };
      return pet;
      }
      if (type === "dog") {
        const pet = new WollyPetAnimal(type, name, getRandomColor());
        pet.says = (): void => {
          console.log("Bark");
        };
        return pet;
      }
    return new WollyPetAnimal("rat", "Lariska", getRandomColor());
  }
}

class WollyPetAnimal implements IPetAnimal {
constructor(public type: Pet, public name: string, public color: Color) {}
  says():void {console.log('Squeak')};
  
}
