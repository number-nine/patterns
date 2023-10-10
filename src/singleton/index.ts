type User = {
  login: string;
  name?: string;
};

/** Singleton 1.1 **/

// let instance: Profile;

// export class Profile {
//     postsCount: number = 0;
//     constructor(public user:User) {
//         if (!instance) instance = this;
//         return instance
//     }
//     incrementByValue(value:number) {
//         this.postsCount += value;
//     }
// }

/** Singleton 1.2 **/

// export class Profile {
//   private static instance:Profile;
//   postsCount:number = 0;

//   constructor(public user: User) {
//     if (typeof Profile.instance === 'object') {
//       return Profile.instance;
//     }
//       Profile.instance = this;
//       return this;
//   }

//   incrementByValue(value:number) {
//     this.postsCount += value;
//   }
// }
