function greet(name){
    // console.log(`Hello ${name}`); Hello Bhavin
}
greet("Bhavin")

/* 
Write a function named `makeTea` that takes one paramter,
`TypeOfTea` and returns a string like `"Making green tea"`
when called with `"green tea"`. Store the result in a varaible name `tea order`
*/

function makeTea(TypeOfTea){
    return `Making ${TypeOfTea}`;
}

let teaOrder = makeTea("green tea")
// console.log(teaOrder);


/* 
Create a function named `orderTea` that takes one
parameter, `teaType`. Inside thi function, create
another funtion named `ConfirmeOrder` that returns a
message like  `"Order Confirmed for chai"`.
call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`;
    }
   return confirmOrder()
}

let orderConfirmation = orderTea("Chai")
// console.log(orderConfirmation);   Order confirmed for chai


/* 
Write an arrow function named `calculateTotal` that
takes two paramters: `price` and quantity. The function 
should return the totak cost by multiplying the `price` and `quantity`
store the result in a variable named `totalCost`
*/

const calculateTotal =(price, quantity) =>{
    return price * quantity
}
let totalCost = calculateTotal(499,25)
// console.log(totalCost);

/* Write a function named `processTeaOrder` that takes
another function, `makeTea`, as a paramter and calls it with
the argument `"earl grey"`.
Return the result of calling `makeTea`
*/
function makeTea(TypeOfTea){
  return `maketea: ${TypeOfTea}`;
}
function processTeaOrder(teaFunction){
    return teaFunction('earl grey')
}

let order= processTeaOrder(makeTea)
// console.log(order);

/* 
write a function named `createTeaMaker` that returns
another function. The returned function should take one
parameter,`teaType`, and return a message Like `"Making green tea"`

store the returned function in a variable named
`teaMaker` and call it with green tea
*/

function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`
    }
}

let teaMaker = createTeaMaker();
let result = teaMaker("green tea")
console.log(result)