function maxNumber(input) {

    let n = Number(input.shift());

    let counter = 0;
    let max = Number.MIN_SAFE_INTEGER;

    while (n > counter) {
        let num = Number(input.shift());

        if (num > max) {
            max = num;
        }
        counter++;
    }
    console.log(max);
}
maxNumber([3,100,99,555]);
maxNumber([4,
    45,
    -20,
    7,
    99]);