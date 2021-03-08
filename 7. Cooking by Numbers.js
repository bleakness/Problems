function cookingNumbers(input) {

    let n = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        if (input[i] === "chop") {
            n = n /2;
            console.log(n);
        } else if (input[i] === "dice") {
            n = Math.sqrt(n);
            console.log(n);
        } else if (input[i] === "spice") {
            n = n + 1;
            console.log(n);
        }else if (input[i] === "bake") {
            n = n * 3;
            console.log(n);
    } else if (input[i] === "fillet") {
            n =  n * 0.8;
            console.log(n.toFixed(1));
        }
    }
   // return n;
}
cookingNumbers([32, 'chop', 'chop', 'chop','chop','chop']);
cookingNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);