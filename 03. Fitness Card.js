function fitnessCard(input) {

    let sum = Number(input.shift());
    let sex = input.shift();
    let years = Number(input.shift());
    let sport = input.shift();

    let price = 0;

    switch (sex) {
        case "m":
            if(sport === "Gym") {
                price += 42;
            } else if (sport === "Boxing") {
                price += 41;
            } else if (sport === "Yoga") {
                price += 45;
            } else if (sport === "Zumba") {
                price += 34;
            } else if (sport === "Dances") {
                price += 51;
            } else if (sport === "Pilates") {
                price += 39;
            }
            break;
        case "f":
            if(sport === "Gym") {
                price += 35;
            } else if (sport === "Boxing") {
                price += 37;
            } else if (sport === "Yoga") {
                price += 42;
            } else if (sport === "Zumba") {
                price += 31;
            } else if (sport === "Dances") {
                price += 53;
            } else if (sport === "Pilates") {
                price += 37;
            }
            break;
    }

    if (years <= 19) {
        price *= 0.8;

    }

    let noMoney = Math.abs(sum - price);

    if (price <= sum) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${noMoney.toFixed(2)} more.`);
    }
}
fitnessCard([20,
    "f",
    15,
    "Yoga"]);