function cat(input) {

    let minutes = Number(input.shift());
    let numberWalks = Number(input.shift());
    let calories = Number(input.shift());

    let walkCat = minutes * numberWalks * 5;
    let caloriesAll = calories / 2;

    if (walkCat > caloriesAll) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${walkCat}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${walkCat}.`)
    }
}

cat([15,
    2,
    500]);