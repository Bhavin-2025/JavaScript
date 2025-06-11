// Number

let balance = 120
let anotherBalance = new Number(120)

// console.log(balance); 120
// console.log(anotherBalance); [Number: 120]
// console.log(anotherBalance.valueOf());120
// console.log(typeof(balance)); number
// console.log(typeof anotherBalance); object


// Boolean

let isActive = true
let isReallyActive = new Boolean(true)


// null and undefined

let firstname;
// console.log(firstname); undefined

let secondname = null;
// console.log(secondname); null


// String

let myString = "hello"
let myStringOne = 'Hola'
let username = "Bhavin"
let greetMessage = `Hello`
// let oldWay = "Hello" + username;  old way of writing
// console.log(oldWay); HelloBhavin

// new Way of writing

let newWay = `HEllo ${username}`
// console.log(newWay); HEllo Bhavin

let demoOne = `Value is ${5*10}`;
// console.log(demoOne); Value is 50



// Symbol ->>>>>>>>>>>> thats guranteed to be unique
let sm1 = Symbol()
let sm2 = Symbol()

// console.log(sm1==sm2); false
// console.log(sm1); Symbol()

let sm3 = Symbol("Bhavin")
let sm4 = Symbol("Bhavin")
// console.log(sm1==sm2); false









