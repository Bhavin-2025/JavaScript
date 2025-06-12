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
// console.log(smallNumbers);


// Challenge 4 Goal is same as 2nd challenge but need to use For each loop

let teaTypes =['green tea','black tea','herbal tea','chai','oolong tea']
let prefered_tea =[]

for (const tea of teaTypes) {
    if(tea==='herbal tea'){
        continue
    }
    prefered_tea.push(tea)
}
// console.log(new_tea);


// Challenge 5
// Use for in loop to loop through object containing city population
// stop the loop  when the population of berlin is found and store all
// all previous cities in a new object named 'cityPopulations'.

let citiesPopulation ={
    London: 100,
    "New York": 200,
    Syndey: 300,
    Berlin: 400,
    LasVegas: 200,
   
};

let citiesPopulations ={}
// console.log(Object.keys(citiesPopulation)); [ 'London', 'New York', 'Syndey', 'Berlin', 'Las Vegas' ]
// console.log(Object.values(citiesPopulation)); [ 100, 200, 300, 400, 200 ]

for (const  city in citiesPopulation) {
    // key = value

    if(city=="Berlin"){
        break;
    }
    citiesPopulations[city]= citiesPopulation[city]
    // console.log(citiesPopulations)

        // console.log(citiesPopulation[city]); 100 200 300 400 200 but all in separate line output
        
    }


    // Challenge 6

    let worldCities ={
    Syndey: 300,
    Berlin: 400,
    LasVegas: 200,
};
    let largeCities ={}
    for(const city in worldCities){
        if(worldCities[city]<250){
            continue
        }
        largeCities[city]= worldCities[city]
    }

    // console.log(largeCities);

    // challenge 7
     
    let teaCollection = ["earl grey","green tea","chai","oolong tea"]
    let availableTeas=[]

    teaCollection.forEach(function(tea) {
  if(tea==='chai'){
    return;
  }  
  availableTeas.push(tea);
    });
    // console.log(availableTeas);[ 'earl grey', 'green tea', 'oolong tea' ]
    
 //  challenge 8
 let myWorldCities = ["Berlin","Tokyo","Sydney","Paris"]

 let traveledCities =[];
 myWorldCities.forEach(city => {
    if(city==="Sydney"){
        return;
    }
    traveledCities.push(city);
 });
//  console.log(traveledCities); [ 'Berlin', 'Tokyo', 'Paris' ]
 

// Challenge 9

let myNumbers =[2,5,7,9]
let doubleNumbers=[]

for (let i = 0; i < myNumbers.length; i++) {
    if(myNumbers[i]===7){
        continue;
    }
    doubleNumbers.push(myNumbers[i]*2); 
    
}
// console.log(doubleNumbers); [ 4, 10, 18 ]


let totalTea = ["chai","black tea","greenish tea","oolong tea","herbal tea"]
let shorTea=[]

for (const tea of totalTea) {
    if(tea.length>10){
        continue
    }
    shorTea.push(tea)
}
console.log(shorTea)
