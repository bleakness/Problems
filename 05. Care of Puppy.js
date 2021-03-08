function puppy(input) {
    let dogFood = Number(input.shift());
    let cmd = input.shift();
    let sum = 0;
    let i = 1;
    let data = dogFood * 1000;

    while (cmd !== "Adopted") {

        let z = Number(cmd);
        sum += z;
        i++;
        cmd = input.shift();

    }
        if (data >= sum) {
            console.log(`Food is enough! Leftovers: ${Math.abs(data - sum)} grams.`);
        } else  {
            console.log(`Food is not enough. You need ${Math.abs(sum - data)} grams more.`);
        }

}


puppy([4,
    130,
    345,
    400,
    180,
    230,
    120,
    'Adopted']);

puppy([3,
    1000,
    1000,
    1000,
    'Adopted']);

puppy([2,
    999,
    456,
    999,
    999,
    123,
    456,
    'Adopted']);