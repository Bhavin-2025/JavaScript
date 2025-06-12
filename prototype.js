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
console.log(`tesla`,Object.getPrototypeOf(tesla))
