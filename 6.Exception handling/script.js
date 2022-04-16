try {
    console.log(a);
    let a = 3;
} catch {
    console.log('let must be declared');
}

try {
    let x = (1 / 0);
    if (x === Infinity) {
        throw new Error();
    }
} catch {
    throw ('cannot be divided by zero');
} 
