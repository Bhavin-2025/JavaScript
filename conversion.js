let score = 33;

// console.log(typeof score);  number
// console.log(typeof(score));  number

let new_score = "33abc";
// console.log(typeof new_score);
let valueInNumber = Number(new_score)
// console.log(typeof valueInNumber); convert no thavu joie number ma pn thaie gyu
// console.log(valueInNumber); NaN

let first_score =null;
let second_score = Number(first_score);
// console.log(second_score); 0 

let third_score =undefined;
let fourth_score = Number(third_score);
// console.log(fourth_score); NaN


// "33" => 33
//  "33abc" => NaN
// true=> 1
// false=> 0

let isLoggedIn = 1

let booleanIsLoggenIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggenIn); true

// 1 -> true
// 0 -> false
// "hitesh" -> true


let someNumber = 33
let stringNumber= String(someNumber)
// console.log(typeof stringNumber); string
// console.log(stringNumber) 33