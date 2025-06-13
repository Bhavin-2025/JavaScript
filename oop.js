let car ={
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function(){
        return `${this.make} car got started in ${this.year}`;
    }
}

// console.log(car.start());    Toyota car got started in 2020
function person(name,age){
    this.name = name;
    this.age = age;
}
let john = new person("John",20)
// console.log(john)


function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `$(this.type) makes a sound`
}

Array.prototype.Bhavin = function(){
    return `Custom method ${this}`
}

let myArray = [1,2,3];
// console.log(myArray.Bhavin()); Custom method 1,2,3

class Vehicle {
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.make} :This is an inheritance example`
    }
}

let myCar = new Car("Toyota","Corolla")
// console.log(myCar.start()); Corolla is a car from Toyota
// console.log(myCar.drive()); Toyota :This is an inheritance example


let vehOne =new Vehicle("Toyota","Corolla")
console.log(vehOne.make);


