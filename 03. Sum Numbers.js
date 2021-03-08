function sumNumbers(input) {
    let n = Number(input.shift());
    let sum = 0;
    while (n !== "Stop") {
        let n2 = Number(n);
        sum += n2;
        n = input.shift();
    }
    console.log(sum);
}
sumNumbers([10,
    20,
    30,
    45,
    "Stop"]);