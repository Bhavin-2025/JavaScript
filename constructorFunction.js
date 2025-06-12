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

