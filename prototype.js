let computer ={cpu: 12}
let lenovo ={
    screen:"HD",
    __proto__:computer,
}
let tomhardware ={}

// console.log(computer)  { cpu: 12 }
// console.log(`computer `,computer.__proto__)  computer  [Object: null prototype] {}
// console.log(`lenovo`,lenovo.__proto__);     lenovo { cpu: 12 }

let genericCar ={tyres: 4}
let tesla ={
    driver: "AI"
}

Object.setPrototypeOf(tesla,genericCar)
// console.log(`genericCar `, tesla);         genericCar  { driver: 'AI' }

// console.log(`tesla`,tesla.tyres)        tesla 4
// console.log(`tesla`,Object.getPrototypeOf(tesla))   tesla { tyres: 4 }


function School(name,age){
    this.name = name;
    this.age = age;
}
School.prototype.SayAge=function(){
    console.log(`Hello,I'm ${this.name} and I am ${this.age} year old`)
}

const s1 = new School("Bhavin",21);

s1.SayAge();     //  Hello,I'm Bhavin and I am 21 year old