function sumNumbers(input) {

    let n = Number(input.shift());
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let numberPlus = Number(input.shift());
        sum += numberPlus;
    }
    console.log(sum)
}
//sumNumbers([2,10,20]);
sumNumbers([3,-10,-20,-30]);

