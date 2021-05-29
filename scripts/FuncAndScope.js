// Function Scope

console.log('----------Function Scope----------');

function startCar(carId) {
    let message = 'Starting...';

    let startFn = function turnKey() {
        console.log(message);
    };
    startFn();
}

startCar(123);


// Error
// console.log(message);

function startCar2(carId) {
    let message = 'Starting...';

    let startFn = function turnKey() {
        let message = 'Override'
        console.log(message);
    };
    startFn();
    console.log(message);
}
startCar2(234);


// Block Scope

console.log('----------Block Scope----------');

let mes = 'Outside';
if(5 === 5) {
    let mes = 'Equal';
    console.log(mes);
}
console.log(mes);

if(5 === 5) {
    var mes2 = 'Equal';
    console.log(mes2);
}
console.log(mes2);


var mes3 = 'Outside';
if(5 === 5) {
    var mes3 = 'Equal';
    console.log(mes3);
}
console.log(mes3);


// IIFE

console.log('----------IIFE----------');

(function () {
    console.log('in Function');
})();

let app = (function () {
    let carId = 123
    console.log('in Function and carId = ' + carId);
    return {};
})();

console.log(app);


// Closures

console.log('----------Closures----------');

let app2 = (function () {
    let carId = 123;
    let getId = function () {
        return carId;
    };
    return {
        // First Method
        getId : getId

        // Second Method 
        // getId;
    };
})();

console.log(app2.getId());



// The This Keyword

console.log('----------The This Keyword----------');

//Use Only without strict mode
let fn = function () {
    console.log(this === window);
}

fn();

let o = {
    carId:123,
    getId: function () {
        return this.carId;
    }
};

console.log(o.getId());



// Recursion Function

console.log('----------Recursion Function----------');

let r = {
    carId:123,
    getId: function () {
        if(this.carId < 130)
        {
         console.log(this.carId);
         this.carId++;
         this.getId();
        }
        else
        {
            console.log('Recursion Function End');
        }
    }
};

r.getId();



// Call and apply

console.log('----------Call and apply----------');




// Spread Syntax

console.log('----------Spread Syntax----------');


// Spread Syntax

console.log('----------Spread Syntax----------');


// Spread Syntax

console.log('----------Spread Syntax----------');