function suitcase(input) {
    "use strict";

    let cmd = Number(input.shift());
    let sum = 0;
    let counter = 0;

    while (true) {
        let z = input.shift();

        if (z === "End") {
            console.log(`Congratulations! All suitcases are loaded!`);
            break;
        }
        counter++;

        if (counter % 3 === 0) {
            cmd -= z * 1.1;
        } else {
            cmd -= z;
        }

        if (cmd <= 0) {
            console.log(`No more space!`);
            counter -= 1;
            break;
        }

}
console.log(`Statistic: ${counter} suitcases loaded.`);
}

suitcase([550,
    100,
    252,
    72,
    "End"]);

/*
suitcase([1200.2,
    260,
    380.5,
    125.6,
    305,
    "End"]);*/
