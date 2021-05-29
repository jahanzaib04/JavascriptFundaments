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

console.log('---Call---');
let p = {
    carId:123,
    getId: function () {
        return this.carId;
    }
}

let newCar = {carId:456};

console.log(p.getId.call(newCar));


let h = {
    carId:123,
    name:'John',
    getId: function (str1,str2) {
        return str1 + this.carId + str2 + this.name;
    }
}

let newCar4 = {carId:256, name:'JAK'};

console.log(h.getId.call(newCar4,'carId = ', ' and name = '));

console.log('---Apply---');

let q = {
    carId:123,
    getId: function (str) {
        return str + this.carId;
    }
}

let newCar2 = {carId: 789}

console.log(q.getId.apply(newCar2,['ID = ']));
console.log(p.getId.apply(newCar2,['ID: ']));

let s = {
    carId:123,
    getId: function (str,num) {
        return str + (num + this.carId);
    }
}

let newCar3 = {carId: 234}

console.log(s.getId.apply(newCar3,['ID = ', 100]));

// Bind

console.log('----------Bind----------');

let t = {
    carId: 246,
    getId:function () {
        return this.carId;
    }
}

let newCar5 = {carId: 642};
let newFn = t.getId.bind(newCar5);
console.log(newFn());

console.log('----Sum and Map----');

let a = {
    num1: 2,
    getId:function (...num) {
        let sum = 0;
        let ad = num.map((a) =>{
           sum += a;
        })

        //sum = Math.abs(sum);

        // let ad = num.forEach((a) =>{
        //     sum += a;
        //  })

        return this.num1 + sum;
    }
}

let newAdd = {num1: 5};
let newFn2 = a.getId.bind(newAdd,10,20,30);
//let newFn2 = a.getId.bind(newAdd,-10,-20,-30);
console.log(newFn2());

// Arrow Function

console.log('----------Arrow Function----------');

let getId = () => 258;

console.log(getId());

let getId2 = prefix => prefix + 834;

console.log(getId2('ID: '));

let getId3 = (str1, str2) => str1 + 209 + str2;

console.log(getId3('ID: ', '!'));


let getId4 = (str1, str2) => {
    return str1 + 405 + str2;
};

console.log(getId4('ID: ', '?'));

let getId5 = _ => 785;

console.log(getId5());

// Default Parameters

console.log('----------Default Parameters----------');

let trackCar = function (carId = 234 , city='KHI') {
    console.log(`Tracking ${carId} in ${city}`);
    //console.log(`Tracking ${Number.parseInt(carId)} in ${city}`);
}

trackCar(290);

trackCar(309,'HYD');

trackCar('HYD',309);

