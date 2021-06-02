// HTML Document

console.log('-----------HTML Document------------');

let doc = document.getElementById('doc');

doc.innerText = 'H2 Update'

console.log(doc.innerText);

// REST Parameters

console.log('----------REST Parameters----------');

function cars(...allCars) {
    allCars.forEach(id => console.log(id))
}

cars(100,200,300);

function cars2(day,...allCars) {
    console.log("Day = " + day)
    allCars.forEach(id => console.log(id))
}

cars2('Sunday',100,200,300);


// Destructing Arrays

console.log('----------Destructing Arrays----------');

let carIds = [1,2,5];

let [car1,car2,car3] = carIds;

console.log(car1,car2,car3);

let car4, remainingCars;

[car4,...remainingCars] = carIds;

console.log(car4,remainingCars);

let remainingCars2;

[,...remainingCars2] = carIds;

console.log(remainingCars2);

[,,...remainingCars2] = carIds;

console.log(remainingCars2);


// Destructing Objects

console.log('----------Destructing Objects----------');

let car = {id:2000, color:'blue'}

let {id,color} = car;
console.log(id,color);


let car5 = {id2:5000, style:'convertible'}

let id2,style 

({id2,style} = car5);
console.log(id2,style);

// Spread Syntax

console.log('----------Spread Syntax----------');

function startCars(car1,car2,car3) {
    console.log(car1,car2,car3);
}

let carIds2 = [220, 200, 500];

startCars(...carIds2)

let carCodes = 'abc'
startCars(...carCodes)

let carCodes2 = 'abcdefg'
startCars(...carCodes2)

function startCars2(car1,car2,car3,...cars6) {
    console.log(car1,car2,car3,...cars6);
}

let carCodes3 = 'abcdefg'
startCars2(...carCodes3)


// typeof()

console.log('----------typeof()----------');
console.log('typeof(1) = ' + typeof(1));
console.log('typeof(true) = ' + typeof(true));
console.log('typeof("Hello") = ' + typeof('Hello'));
console.log('typeof(function () {}) = ' + typeof(function () {}));
console.log('typeof({}) = ' + typeof({}));
console.log('typeof(undefined) = ' + typeof(undefined));
console.log('typeof(null) = ' + typeof(null));
console.log('typeof(NaN) = ' + typeof(NaN));
console.log('typeof(isNaN) = ' + typeof(isNaN));


// Common Type Conversions

console.log('----------Common Type Conversions----------');
let foo = 23;

console.log(foo.toString());
console.log(typeof(foo.toString()));

console.log(Number.parseInt('55'));
console.log(typeof(Number.parseInt('55')));

console.log(Number.parseInt('105ASF'));
console.log(typeof(Number.parseInt('105ASF')));

console.log(Number.parseInt('255.94ASF'));
console.log(typeof(Number.parseInt('255.94ASF')));

console.log(Number.parseFloat('55.56'));
console.log(typeof(Number.parseFloat('55.56')));

console.log(Number.parseFloat('105.65ASF'));
console.log(typeof(Number.parseFloat('105.65ASF')));

