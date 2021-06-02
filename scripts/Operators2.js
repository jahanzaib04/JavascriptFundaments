// Equality Operators

console.log('----------Equality Operators----------');

console.log(1==1);

console.log(1===1);

console.log(1=='1')

console.log(1==='1')

console.log(1===true)

console.log(1==true)

let id = 245;

console.log(id === 245)
console.log(id === '245')
console.log(id !== '245')

// Unary Operators

console.log('----------Unary Operators----------');

let year = 1979;
console.log(year++);
console.log(year);
console.log(--year);
console.log(year);

let year2 = '1979';

console.log(typeof(year2));
console.log(typeof(+year2));

let year3 = '19ASR';

console.log(typeof(year3));
console.log(typeof(+year3));

let year4 = 'ASR19';

console.log(typeof(year4));
console.log(typeof(+year4));


// Logical Operators

console.log('----------Logical Operators----------');

if( 5 > 5 && 5 < 100){
    console.log('First True')
}

if( 5 > 5 || 5 < 100){
    console.log('Second True')
}

if( 5 > 5 || 5 < 100 && 5 === 5){
    console.log('Third True')
}

if((5 > 5 || 5 < 100) && 5 === 5){
    console.log('Fourth True')
}

let userSettings = null;
let defaultSettings = {name: 'Default'};

console.log(userSettings || defaultSettings);
console.log(userSettings && defaultSettings);
console.log(!userSettings);
console.log(!true);

// Relational Operators

console.log('----------Relational Operators----------');

let s1 = 'Zoo';
let s2 = 'alphabet';

if(s1 < s2){
    console.log(true);
}

else{
    console.log(false);
}


if(s1.toUpperCase() < s2.toUpperCase()){
    console.log(true);
}

else{
    console.log(false);
}

if(s1.length < s2.length){
    console.log(true);
}

else{
    console.log(false);
}


// Conditional Operator

console.log('----------Conditional Operator----------');

let foo = 16;

var result = (foo > 5)? true : false;

console.log(result)

console.log(16 < 4 ? 'Ok' : 'Not Ok');


// Assignment Operators

console.log('----------Assignment Operators----------');

let year5 = 1990;

console.log(year5);

year5 -= 20;

console.log(year5);

year5 += 20;

console.log(year5);

year5 *= 20;

console.log(year5);

year5 /= 20;

console.log(year5);

year5 %= 20;

console.log(year5);

year5 **= 2;

console.log(year5)

let year6 = 1990;

year6 >>= 1;

console.log(year6);

year6 <<= 2;

console.log(year6);


