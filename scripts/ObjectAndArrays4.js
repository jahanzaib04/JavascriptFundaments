// Constructor Function

console.log('----------Constructor Function----------');

function Car(id) {
    this.carId= id;
}

let car = new Car(123);
console.log(car.carId);


function Car2(id) {
    this.carId = id;
    this.start = function () {
        console.log('Car start: ' + this.carId);
    }
}

let vechile = new Car2(234);
vechile.start();

// Prototypes

console.log('----------Prototypes----------');

function Car3(id) {
    this.carId = id;
}

// Using Prototype Save lots of memory because it has only one instance

Car3.prototype.start = function () {
    console.log('start: ' + this.carId);
}

let car2 = new Car3(276);
car2.start();


Car3.prototype.add = function () {
    console.log(`${this.carId} + 34 = ${this.carId + 34}`);
}

car2.add();


// String.prototype

console.log('----------String.prototype----------');

String.prototype.hello = function () {
    return 'Hello Mr/Mrs ' + this.toString()
}

console.log("Jak".hello())

String.prototype.rSymbol = function (symbol, rChar) {
    return this.replaceAll(symbol,rChar)
}

let nic = '312312-31231231-31312';

console.log(nic.rSymbol('-','?'));


// Convert to JSON

console.log('----------Convert to JSON----------');

let truck = {
    id: 209,
    color:'red'
};

console.log(JSON.stringify(truck));

let jsonIn = 
`
    [
        {"carId":123,"color":"blue"},
        {"carId":398,"color":"red"},
        {"carId":754,"color":"yellow"}
    ]
`;

let car3 = JSON.parse(jsonIn);
console.log(car3);

car3.forEach(e => {
    console.log(`carId = ${e.carId} \t color = ${e.color}`)
});

console.log(JSON.stringify(car3));

// Spread Syntax

console.log('----------Spread Syntax----------');


// Array Iteration

console.log('----------Array Iteration----------');

let cars = [
    {carId: 390, color: "red"},
    {carId: 190, color: "green"},
    {carId: 209, color: "purple"},
    {carId: 964, color: "red"}
];

let cars2 = [
    {carId: 390, color: "red"},
    {carId: 590, color: "green"},
    {carId: null, color: "purple"},
    {carId: 964, color: "red"}
];

cars.forEach(car => console.log(car));

cars.forEach((car,index) => console.log(car, index));

let colors = cars.filter(
    car => car.color === 'red'
)
console.log(colors)

console.log(colors[0].carId);

let result = cars.every (
    car => car.carId > 0
);

let result2 = cars2.every (
    car => car.carId > 0
);

console.log(result2);

let car4 = cars.find (
    car => car.carId > 400
);

console.log(car4);

let car5 = cars2.find (
    car => car.carId > 400
);

console.log(car5);


let fIndex = cars.findIndex(car => car.carId === 390)

console.log(fIndex)

let fIndex2 = cars.findIndex(car => car.carId === 240)

console.log(fIndex2)

console.log(cars.findIndex(car => car.carId > 500))

console.log(cars2.findIndex(car => car.carId === null))

