class Bird{
    fly(){
        return `Flying...`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`;
    }
}

let bird = new Bird()
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());




// static method
class Calculator{
    static add(a,b){
        return a + b;
    }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2,3));   
// TypeError: miniCalc.add is not a function


console.log(Calculator.add(2,3));
