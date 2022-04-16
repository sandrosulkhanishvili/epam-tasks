//movie names 
/*
let movieNames = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "The Godfather: Part II", "12 Angry Men"];

for (let i = 0; i < movieNames.length; i++) {
    console.log(movieNames[i]);
}
*/

//car manufacurers
/*
let carMan = ["Tesla", "Porsche", "Kia", "Mazda", "Toyota"];
carMan = carMan.join(', ');
console.log(carMan);
carMan = carMan.split(", ");
console.log(carMan);
*/

//name of friends
/*
let names = ["Mark", "Bob", "Jhon"];
let gNames = names.map(name => "Hello " + name);
console.log(gNames);
*/

//converting numeric array to boolean
/*
let arr = [0, 1, 2, 3, 4, 5, 6];
arr = arr.map(num => !!num);
console.log(arr);
*/

//sort the array
/*
function compareNum(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
}

let arr = [1, 6, 7, 8, 3, 4, 5, 6];

arr.sort(compareNum);
alert(arr);
*/

//filter array 
/*
let arr = [1, 6, 7, 8, 3, 4, 5, 6];
let newArr = arr.filter(num => num > 3);
console.log(newArr);
*/

//write a function that takes two parameters
/*
let arr = [1, 6, 7, 8, 3, 4, 5, 6];
function func(array, num) {
    console.log(array.indexOf(num));
}

func(arr, 3);
*/

//loop printing 'a' 10 times
/*
for (let i = 0; i < 10; i++) {
    console.log('a');
}
*/

//loop for prime number
/*
for (let i = 2; i < 100; i++) {

    let notPrime = false;
    for (let j = 2; j <= i; j++) {
        if (i % j === 0 && j !== i) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        console.log(i);
    }
}
*/

//loop for odd numbers
/*
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}
*/