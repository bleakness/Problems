function summ(input) {
    "use strict";

    let one = Number(input[0]);
    let two = Number(input[input.length - 1]);

    let res = one + two;

    console.log(res)
}

summ(['20', '30', '40']);