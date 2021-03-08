function minNumber(input) {

    let n = Number(input.shift());
    let counter = 0;
    let min = Number.MAX_SAFE_INTEGER;

    while (n > counter) {
        let mini = Number(input.shift());

        if (mini < min) {
            min = mini;
        }
        counter++;
    }
    console.log(`${min}`)
}

minNumber([2,
    100,
    99]);