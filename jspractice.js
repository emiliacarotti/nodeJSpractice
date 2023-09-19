// -------------------- variables using let/const

// let name = 'Emi';
// console.log(name)
// name = 'Tony'
// console.log(name)

// const age = 5;
// console.log(age);
// age = 10;
// console.log(age);

// -------------------- functions in objects

// const person = {
//     name: 'Max',
//     age: 29,
//     greet() {
//         console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old!');
//     }
// };

// watch the notation of the fxn above

// person.greet()
// don't need to console log the above, just call it. console logging gives an undefined after the statement

// -------------------- looping thru array and mapping arrays

// const things = ['Sports', 53, true, null]

// for (let thing of things){
//     console.log(thing)
// }

// console.log(things.map(thing => {
//     return 'thing: ' + thing;
// }));
// console.log(things)

// -------------------- spread and rest

// const hobbies = ['pottery', 'drawing']

// const hobbiesCopy = [...hobbies]

// console.log(hobbiesCopy)

// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray(1, 2, 3, 4, 5))

// -------------------- deconstructing arrays and objects

// const person = {
//     name: 'Emi',
//     age: 26
// }

// const printName = ({ name }) => {
//     console.log(name)
// }

// printName(person);

// const { name, age } = person;
// console.log(name, age);

// -------------------- async code and promises

// fxn fetchData will print 'Done!' after two seconds. It is declared but not called.
// when you run the program, setTimeout below runs, then 2 seconds later, prints 'Timer is Done!' and calls fetchData fxn
// which then prints 'Done!' 1.5 seconds after that

// notice the callback special words
// a callback is a function passed into another function
// it is a function to be executed after another function has finished executing

// const fetchData = callback => {
//     setTimeout(() => {
//         callback('Done!')
//     }, 1500);
// }

// setTimeout(() => {
//     console.log('Timer is done!')
//     fetchData(text => {
//         console.log(text);
//     });
// }, 2000);

// using promises we can do the same thing below and rewrite:
// often we use third party packages that do this behind the scenes instead but still good to know

// we use the Promise constructor function which is built into Javascript in node.js
// the promise constructor also takes a call back as two arguments: resolve & reject
// resolve completes the promise successfully
// reject rejects the promise, such as throwing an error

// then we move the async code inside the promise fxn
// putting a promise inside fetchData means we no longer need to pass 'callback' as a parameter
// setTimeout still needs callback inside it because it doesn't give us a Promise API, but instead of being 'callback', it becomes the promise 'resolve'

// within fetchData, after defining the promise, we have to return it
// this is synchronous code, so the 'return promise' will be returned immediately after the promise is created, and before the code in the promise is run
// the code in the promise is only run when we actually call 'fetchData' fxn and the timeout of 1.5 seconds completes

// now in the place where we call fetchData, we no longer pass in a callback, instead we use '.then' which is callable on a promise
// .then allows us to define the callback fxn which will execute once the promise is resolved

// the advantage is the notation below, how you can chain .then blocks
// within the first .then block, another promise is returned , i think

// const fetchData = () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Done!')
//         }, 1500);
//     });
//     return promise;
// }

// setTimeout(() => {
//     console.log('Timer is done!')
//     fetchData()
//         .then(text => {
//             console.log(text);
//             return fetchData();
//         })
//         .then(text2 => {
//             console.log(text2)
//         });
// }, 2000);

