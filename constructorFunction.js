function Person(name,age){
  this.name = name
  this.age = age
}

function Car(make, model){
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota", "Camry")
// console.log(myCar);  Car { make: 'Toyota', model: 'Camry' }

let myNewCar = new Car("Tata","Safari")
// console.log(myNewCar);  Car { make: 'Tata', model: 'Safari' }

function Tea(type){
    this.type = type
    this.describe = function(){
        return `this is a cup of ${type}`
    }
}

let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe()); this is a cup of lemon tea

function animal(species){
    this.species = species
}

animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

function Student(name,age){
    this.name = name;
    this.age = age;
  
    this.greet = function(){
        // console.log(`Hello I am ${this.name} and I am ${this.age} year old.`)
    }

}

let student1 = new Student("Bhavin",22);
let student2 = new Student("Harsh",23);


student1.greet(); //Hello I am Bhavin and I am 22 year old.
student2.greet(); //Hello I am Harsh and I am 23 year old.



function Car(name,model){
    this.name = name;
    this.model = model;

    Car.prototype.whichCar=function() {
        console.log(`I have ${this.name} and I bought ${this.model} model`)
    }
}

const mycar1 = new Car("Dzire",2021)
const mycar2 = new Car("Skoda",2019)

// mycar1.whichCar(); I have Dzire and I bought 2021 model
// mycar2.whichCar(); I have Skoda and I bought 2019 model
