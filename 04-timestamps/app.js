//timestamps
console.log(new Date().toLocaleTimeString());

console.log(Date.now());

console.log(new Date().getTime());

console.log(new Date().valueOf());

setTimeout(() => {
    console.log(Date.now())
},1000);

let people = [];

people = [... people, {id: Date.now(), name: 'Peter'}];

setTimeout(() => {
    people = [...people, {id: Date.now(), name: 'John'}];
    console.log(people);
},1000);

// create/get dates
console.log(new Date(1632961557647));
const now = Date.now();
const futureDate = new Date(now + 1000 * 60);
console.log(futureDate);
console.log(new Date());

// difference between dates
const firstDate = new Date();
const secondDate = new Date(2021, 8, 28);

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

console.log(firstValue);
console.log(secondValue);

const timeDifference = secondValue - firstValue

console.log(timeDifference);
const minutes = timeDifference / (1000 * 60);
console.log(minutes);

const hours = timeDifference / (1000 * 60 * 60);
console.log(hours);



















