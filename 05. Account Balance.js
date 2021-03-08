function bank(input) {

    let n = Number(input.shift());

    let counter = 0;
    let total = 0;

    while (counter < n) {
        let current = Number(input.shift());
        if (current < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        total += current;
        console.log(`Increase: ${current.toFixed(2)}`);
        counter++;
    }

    console.log(`Total: ${total.toFixed(2)}`);
}

bank([3,
    5.51,
    69.42,
    100]);