import {userList} from './db.js';

console.log( userList[0].name );

//primitívek
const num = 5; //number
const userName = 'Gábor'; //string
const isActive = false; //bool
const nothing = null; //object
let teszt; //undefined

Number.prototype.isDivided = function(divider) {
    return this % divider === 0;
};

console.log(num.isDivided(5) );

//Collections
const mixed = [1, 2, 4, ['Hello', true], {id: 44}, false];
console.log(mixed[4].id);
console.log(mixed.length);
mixed[5] = true; //módosítás

console.log(userList[0].age);
userList[0].name = 'Little Mermaid'; //módosítás
console.log(userList);

const key = 'id';
console.log(userList[1][key]);

console.log('Hello JS!');