// interface ICar {
//     price: number;
//     model: string;
// }

// class Car implements ICar {
//     constructor(public price: number = 1000, public model: string = "car") {
        
//     }

//     getPrice():number {
//         return this.price
//     }

//     getModel(): string {
//         return this.model
//     }
// }

// export class Nissan extends Car {
//   constructor() {
//     super();
//     this.price = 35000;
//     this.model = "XTrail";
//   }
// }

// export class MoonRoof {
//     car: Car;
//     constructor(car:Car) {
//         this.car = car
//     }

//     getPrice():number {
//         return this.car.getPrice() + 2000;
//     }

//     getModel(): string {
//         return `${this.car.getModel()} SL`
//     }
// }


// type Fnc = (x: number) => number
    
// let f:Fnc = (n: number): number => (n !== 1) ? (f(n - 1) * n) : n; 

// const logDecorator = (x:Fnc) => {
//     return function () {
//         const result = x.apply(this, arguments);
//         console.log('result:', result);
//         return result;
//     }
// }

// const countDecorator = (x: Fnc) => {
//     let cnt: number = 1;
//     return function () {
        
//         console.log('call:', cnt);
//         cnt++;
//         return x.apply(this, arguments);
//     }
// }
// f = countDecorator(f);
// f = logDecorator(f)


// export {f};