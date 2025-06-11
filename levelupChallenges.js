// Challenge 1 Goal is to stop when Chai comes in an array and after that push all the element before chai
let teas =['green tea','black tea','chai','oolong tea']
let selectedTeas=[]
for (let i = 0; i < teas.length; i++) {
    if(teas[i]==='chai'){
        break;
    }
    selectedTeas.push(teas[i]);  
}
// console.log(selectedTeas); [ 'green tea', 'black tea' ]

// Challenge 2 Goal is to skip paris and push all the element in array other than paris

let cities = ['London','New York','Paris','Berlin'];
let visitedCities =[]

for(let i=0;i<cities.length;i++){
    if(cities[i]==='Paris'){
        continue;
    }
    visitedCities.push(cities[i]);
}
// console.log(visitedCities);[ 'London', 'New York', 'Berlin' ]

// challenge 3 stop when when you find 4 number and store all number before that but do using "for -of"

let numbers = [1,2,3,4,5]
let smallNumbers=[]

for (const num of numbers) {
    if(num===4){
        break;
    }
    smallNumbers.push(num)
}
console.log(smallNumbers);

