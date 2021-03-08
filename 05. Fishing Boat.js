function fishingBar(input) {

    let budget = Number(input.shift());
    let seasson = input.shift();
    let ribari = Number(input.shift());

    let price = 0;
    let discount = 0;

    switch (seasson) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
            price = 4200;
            break;
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600 ;
        break;
    }

        if (ribari <= 6 ) {
            discount = price * 0.9;
        } else if (ribari >= 7 && ribari <= 11) {
            discount = price * 0.85;

        } else if (ribari >= 12) {
            discount = price * 0.75;
        }

        if (ribari % 2 === 0 && seasson !== "Autumn") {
            price *= 0.95;
    }
    let res = Math.abs(budget - discount);
    if (budget >= discount) {
    console.log(`Yes! You have ${res.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${res.toFixed(2)} leva.`)
    }
}

fishingBar([3000, "Summer", 11]);
fishingBar([3600,    "Autumn",    6]);
fishingBar([2000,    "Winter",    13]);