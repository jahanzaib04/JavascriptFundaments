// The Window Object

console.log('----------The Window Object----------');

year = 1990;

console.log(window.year);

console.log(window.innerWidth);

console.log(innerWidth);

console.log(innerHeight)


// Timers

console.log('----------Timers----------');

let timeoutID = setTimeout(function() {
    console.log('1 Second passed');
}, 1000);

// if you need to cancel
clearTimeout(timeoutID);

let intervalId = setInterval(function () {
    console.log('1 second passed');
},1000);

// if you need to cancel
clearInterval(intervalId);


// The Location Object

console.log('----------The Location Object----------');

console.log(location.href)
console.log(location.pathname)
console.log(location.port)
console.log(location.host)
console.log(location.protocol)


// Selecting DOM Elements

console.log('----------Selecting DOM Elements----------');

let h = document.getElementById('doc');
let p1 = document.getElementsByClassName('p1');
let p2 = document.getElementsByClassName('p2');

console.log(h.innerText);
console.log(p1[0].innerHTML);
console.log(p2)


// Modifying DOM Elements

console.log('----------Modifying DOM Elements----------');

let element = document.getElementById('doc');
element.textContent = 'New Heading';
element.setAttribute('name','BMW');
element.classList.add('myClass');
element.style.color = 'blue';
