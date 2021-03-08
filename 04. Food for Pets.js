function foodpets(input) {

    let days = Number(input.shift());
    let food = Number(input.shift());
    let dogy = 0;
    let caty = 0;
    let bisquit = 0;

    for (let day = 1; day <= days; day++) {
            let dog = Number(input.shift());
            let cat = Number(input.shift());
            dogy += dog;
            caty += cat;

            if (day % 3 === 0) {
                bisquit += (dog + cat) * 0.1;
            }

        }
        let total = (dogy + caty);

        console.log(`Total eaten biscuits: ${Math.round(bisquit)}gr.`);
        console.log(`${((total / food) * 100).toFixed(2)}% of the food has been eaten.`);
        console.log(`${((dogy / total) * 100).toFixed(2)}% eaten from the dog.`);
        console.log(`${((caty / total) * 100).toFixed(2)}% eaten from the cat.`);
}
foodpets([3,
    1000,
    300,
    20,
    100,
    30,
    110,
    40]);