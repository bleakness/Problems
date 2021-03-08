function cinema(input) {

    let type = input.shift();
    let row = Number(input.shift());
    let col = Number(input.shift());

    let income = 0;

    if (type === "Premiere") {
        income = row * col * 12;
    } else if (type === "Normal") {
        income = row * col * 7.50;
    } else if (type === "Discount") {
        income = row * col * 5;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Premiere", 10,12]);