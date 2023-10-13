/** Singleton **/

// import { Profile } from './singleton'

// const profile1 = new Profile({ login: 'tom@email.com', name: 'Tom' })
// console.log(profile1.user.name, profile1.postsCount);
// profile1.incrementByValue(10);
// console.log(profile1.user.name, profile1.postsCount);
// const profile2 = new Profile({ login: "jack@email.com", name: "Jack" });
// console.log(profile2.user.name, profile2.postsCount);

/** Factory method**/

// import { PetFactory } from "./factory-method";

// const zooShop = new PetFactory()
// const pet1 = zooShop.create("cat", "Murzik");

// if (pet1) {console.log(pet1);
//     console.log(pet1.says());
// }

// const pet2 = zooShop.create("dog", "Barsik");
// if (pet2) {
//   console.log(pet2);
//   console.log(pet2.says());
// }

// const pet3 = zooShop.create("rat", "");
// if (pet3) {
//   console.log(pet3);
//   console.log(pet3.says());
// }


/** Abstract factory**/

// import { petFactory } from "./abstract-factory";

// const pet = petFactory('bat', 'Murzik')
// pet?.says()
