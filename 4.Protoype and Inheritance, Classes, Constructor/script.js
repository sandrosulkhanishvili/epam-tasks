let animal = {
    move: true,
}

let cat = {
    __proto__: animal,
}

console.log(cat.move);