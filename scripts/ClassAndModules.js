// Class Basics

console.log('----------Class Basics----------');

class D{

}
let d = new D();
console.log(d)


// Constructors and Properties

console.log('----------Constructors and Properties----------');

class Car{
    constructor(id){
        this.id = id;
        this.color = 'blue';
    }
}

let car = new Car(256);
console.log(car.id);
console.log(car.color);


// Methods

console.log('----------Methods----------');

class Car2{
    constructor(id){
        this.id = id;
    }
    name(str){
        return `${str} ID: ${this.id}`;
    }
}

let car2 = new Car2(908);
console.log(car2.name('BMW'))


// Inheritance

console.log('----------Inheritance----------');

class Vehicle{
    constructor(){
        this.type = 'car';
    }
    start(){
        return `Starting: ${this.type}`
    }
}

class Car3 extends Vehicle {
    constructor(){
        super();
        this.name = 'BMW'
    }
}

let car3 = new Car3();
console.log(car3.type)
console.log(car3.name)
console.log(car3.start())

class Car4 extends Vehicle{
    start(){
        return 'in Car Start ' + super.start();
    }
}

let car4 = new Car4();
console.log(car4.start())

// Creating and Import a Module

console.log('----------Creating and Import a Module----------');

import {Car5} from './models/Car.js';

let car5 = new Car5(123);
console.log(car5.id)


