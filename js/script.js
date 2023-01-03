/*-------------Завдання №1-------------*/
// const car = {
//     model: 'BMW',
//     year: 2022,
//     color: 'black',
// }

// car.color = 'red';

// car.type = 'electric';

// car.signal = function(){
//     alert('fa! fa!');
// } 

// console.log(car);
// car.signal();

/*-------------Завдання №2-------------*/
// let salaries = {
//     frontend: 12000,
//     backend: 10000,
//     designer: 8000,
//     dayPay() {
//         alert('We must pay salary on Tuesday!');
//     },
//     total() {
//         let sum = 0;
//         for (let key in this){
//             if (typeof this[key] === 'number'){
//                 sum += this[key];
//             }
//         }
//         console.log(sum);
//     },
// }

// console.log(salaries);
// salaries.total();
// salaries.manager = 5000;
// console.log(salaries);
// salaries.total();

/*-------------Завдання №3-------------*/
// function Firm(brand, system, cost){
//     this.brand = brand;
//     this.system = system;
//     this.cost = cost;
// }

// const dell = new Firm('Dell', 'windows', 800);
// const apple = new Firm('Apple', 'MAC OS', 1700);

// console.log(dell);
// console.log(apple);

/*-------------Завдання №4-------------*/
// function Firm(brand, system, cost){
//         this.brand = brand;
//         this.system = system;
//         this.cost = cost;
//         this[Symbol.toPrimitive] = function (hint){
//             console.log(hint);
//             switch(hint){
//                 case 'string':
//                     return this.brand
//                 case 'string':
//                     return this.system
//                 case 'number':
//                     return this.cost
//                 case 'default':
//                     return this.brand + ' ' + this.system + ' ' + this.cost + ' // '
//             }
//         }
//     }
    
// const dell = new Firm('Dell', 'windows', 800);
// const apple = new Firm('Apple', 'MAC OS', 1700);

// console.log(String(dell));
// console.log(+apple);
// console.log(dell + apple);