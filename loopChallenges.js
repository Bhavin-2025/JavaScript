// Challenge 1

let sum = 0;
let i = 1

while(i<=5){
    sum = sum + i;
    i++;
}

console.log(sum);


// Challenge 2

let countdown = []
let j = 5;
while(j>0){
    countdown.push(j);
    j--;
}
// console.log(countdown) [ 5, 4, 3, 2, 1 ]


// Challenge 3

/* let teaCollection = []
let tea

do{
    tea = prompt(`Enter your favourite tea(type"stop" to finish)`)
   if(tea!=="stop"){
    teaCollection.push(tea)
   }
}
while(tea!=="stop")
 */
// challenge 4

let total = 0;
let k = 1;
do{
total+=k;
k++;
}while(k<=3);


// challenge 5

let multipliedNumbers =[]
let numbers =[2,4,6]

for (let l= 0; l < numbers.length;l++) {
    takeNumber=numbers[l]*2
    multipliedNumbers.push(takeNumber)
}
// console.log(multipliedNumbers);

// Challenge 6

let cities=["a" , "b" , "c"];
let cityList=[]

for(let c =0;c<cities.length;c++){
    const myCity = cities[c];
    cityList.push(myCity)
}

// console.log(cityList);


let student = {
  name: "Bhavin",
  age: 21,
  city: "Surat"
};

for (let key in student) {
  console.log(key + ":", student[key]);
}


