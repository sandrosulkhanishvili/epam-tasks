// object task

/*let car = {
    color: 'black'
}

car.color = 'green';
car.engine = function func() { console.log("engine power") };
*/

//Pears and apples

/*let pears = 12;
let apples = 22;
function sum(x, y) {
    return x + y;
}
sum(pears, apples);
*/

//payment terminal

/*
let name = prompt("Enter Name: ");
function nameDefine(x) {
    if (x !== "") {
        console.log(`Hello ${x}`);
    } else {
        console.log("no such name");
    }
}

nameDefine(name);
*/

//Type of argument

/*function type(x) {
    console.log(typeof (x))
}
*/

//Prime Number

/*let num = prompt("Enter number: ");
let count = 0;
function primeCounter(x) {
    for (let i = 2; i < x; i++) {
        if (x % i >= 1) {
            count++;
        } else if (x % i == 0) {
            break;
        }
    }
    return count;
}

function prime(x) {
    primeCounter(x);
    if ((count == x - 2 && x != 4)) {
        alert("Number is prime");
    } else {
        alert("is not prime");
    }
}

prime(num);
*/