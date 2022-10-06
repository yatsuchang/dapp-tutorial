


// Javascript ES6

// const and let (replace var)

// arrow functions

// template string

// default parameters

// array destructuring

// object destructuring
// const { name, surname, password, email } = user;
// simplify the following 4 lines
// const name = user.name;
// const surname = user.surname;
// const password = user.password;
// const email = user.email;

// rest operator
//const add = (...numbers) => console.log(numbers.reduce((a, b) => a+b, 0));
// add(1,2,3,4,5);
// add(1,5,7,8,10,15,20);

// spread operator
//const array = [1,2,3];
//console.log(...array); // 1 2 3

// Javascript Map
// const myMap = new Map([ ['name', 'John'], ['surname', 'Doe'] ])// Map { 'name' => 'John', 'surname' => 'Doe' }

// const myObject = {};
// const a = {};
// const b = {};
// myObject[a] = 'a' // myObject = { '[object Object]': 'a' }
// myObject[b] = 'b' // myObject = { '[object Object]': 'b' } 另一個被完全取代, 因 object 只能有唯一的 key
// 用 map 來解決
// const myMap2 = new Map([ [a, 'a'], [b, 'b'] ]);// Map { {} => 'a', {} => 'b' }

// const myMap3 = new Map([ [{}, 'a'], [{}, 'b'] ]);
// myMap3.set({}, 'c'); // Map { {} => 'a', {} => 'b', {} => 'c' }
// myMap3.set('a', 2);  // Map { {} => 'a', {} => 'b', {} => 'c', 'a' => 2 }
// myMap3.has('a');     // true
// myMap3.delete('a');  // Map { {} => 'a', {} => 'b', {} => 'c' }
// myMap3.clear();      // Map {}
// myMap3.size;
// console.log(myMap3);

// ES7 & ES8 features

// String.prototype.padStart/padEnd
// padStart/padEnd(desiredLength, textToAdd)
// const string = '';
// console.log(string.padStart(10, 'Hi'));//HiHiHiHiHi (10 letters)
// console.log(string.padStart(10, 'Javascript ABCDEF'));//Javascript (10 letters)
// console.log(string.padEnd(10, 'Hi'));  //HiHiHiHiHi (10 letters)

// const string2 = '12345';
// console.log(string2.padStart(10, '.'));//.....12345
// console.log(string2.padEnd(10, '.'));  //12345.....

// Object.values
// const object = {
//     name: 'John',
//     age: 20,
//     favorBooks: ['boo1', 'book2'],
// }

// console.log(object);//{ name: 'John', age: 20, favorBooks: [ 'boo1', 'book2' ] }
// console.log(Object.values(object));//[ 'John', 20, [ 'boo1', 'book2' ] ]
// // Object.entries
// console.log(Object.entries(object));
// [
//     [ 'name', 'John' ],
//     [ 'age', 20 ],
//     [ 'favorBooks', [ 'boo1', 'book2' ] ]
// ]

// Async functions

// Exponentiation
// Math.pow(2, 3) === 2 ** 3

// Javascript Concepts

// Array Methods
// const numbers = [1,2,3,4,5];
//numbers.forEach(number => console.log(number));
// numbers.includes(2); // true
// numbers.some(number => number < 3);// true
// numbers.every(number => number < 3);// false

// const filteredNumbers = numbers.filter(number => number < 3);
// const doubledNumbers = numbers.map(number => number * 2);
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// See Numeric Sort from https://www.w3schools.com/js/js_array_sort.asp
//const sortedArray = numbers.sort((a, b) => b - a);// Do not use a > b or b > a // this modified original array
//numbers.reverse();// modified original array

// const numbers2 = [6,7,8,9,10];
// numbers.concat(numbers2);//return a new array

// Javacript Set - unorder list 不能像陣列那樣用索引存取
// const numbers3 = [1,1,1,2,2,3,4,5];
// const mySet = new Set(numbers3);// Set { 1, 2, 3, 4, 5 }
// const uniqueArray = [...mySet];// [ 1, 2, 3, 4, 5 ]

// mySet.add(6);
// mySet.delete(3);
// mySet.has(5);
// mySet.size;
// mySet.clear();

const users = [];
const addUser = ({ id, name, room }) => {

    const user = { id, name, room };
    return { user }
}
const u = addUser({ id:1, name:'thomas', room:'dsd'})
console.log('u:', u);// { user: { id: 1, name: 'thomas', room: 'dsd' } }


