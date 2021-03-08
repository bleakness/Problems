function increasing(input) {
    "use strict";

   // input = input.map(Number);
    //let min = Number.MAX_SAFE_INTEGER;
    let res = [];
    let big = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= big) {
            res.push(input[i]);
            big = input[i]
        }
    }
    console.log(res.join(`\n`))
}
increasing([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);