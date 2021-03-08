function newHome(input) {

    let type = input.shift();
    let numbers = Number(input.shift());
    let budget = Number(input.shift());

    let discount = 0;
    let price = 0;

    switch (type) {
        case "Roses":
            price = 5;
            break;
        case "Dahlias":
            price = 3.8;
            break;
        case "Tulips":
            price = 2.8;
            break;
        case "Narcissus":
            price = 3;
            break;
        case "Gladiolus":
            price = 2.5;
            break;
    }

    let totalPrice = price * numbers;

    if (type === "Roses" && numbers >= 80) {
        totalPrice *= 0.9;
    } else if (type === "Dahlias" && numbers >= 90) {
        totalPrice *= 0.85;
    } else if (type === "Tulips" && numbers >= 80) {
        totalPrice *= 0.85;
    } else if (type === "Narcissus" && numbers >= 120) {
        totalPrice *= 1.15;
    } else if (type === "Gladiolus" && numbers <= 80) {
        totalPrice *= 1.20;
    }



    if (totalPrice >= budget) {
        console.log(`Hey, you have a great garden with ${numbers} ${type} and ${Math.abs(totalPrice - budget).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${Math.abs(totalPrice - budget).toFixed(2)} leva more.`)
    }
}

newHome(["Roses", 55, 250]);
newHome(["Tulips", 88, 260]);
newHome(["Narcissus", 119,360]);