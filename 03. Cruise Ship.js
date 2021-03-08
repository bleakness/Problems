function cruiseShip(input) {
    "use strict";
    let typeCruis = input.shift();
    let typeCabin = input.shift();
    let night = Number(input.shift());

    let price = night * 4;
    let sum = 0;
    if (typeCabin === "standard cabin") {
        if (typeCruis === "Mediterranean") {
            price *= 27.50;
        } else if (typeCruis === "Adriatic") {
            price *= 22.99;
        } else if (typeCruis === "Aegean") {
            price *= 23.00;
        }
    } else if (typeCabin === "cabin with balcony") {
        if (typeCruis === "Mediterranean") {
            price *= 30.20;
        } else if (typeCruis === "Adriatic") {
            price *= 25.00;
        } else if (typeCruis === "Aegean") {
            price *= 26.60;
        }
    } else if (typeCabin === "apartment") {
        if (typeCruis === "Mediterranean") {
            price *= 40.50;
        } else if (typeCruis === "Adriatic") {
            price *= 34.99;
        } else if (typeCruis === "Aegean") {
            price *= 39.80;
        }
    }

    if (night > 7) {
        price *= 0.75;
       // console.log(price)
    }

        console.log(`Annie's holiday in the ${typeCruis} sea costs ${price.toFixed(2)} lv.`);
}
cruiseShip(["Aegean","standard cabin",10]);
cruiseShip(["Adriatic","apartment",5]);
cruiseShip(["Mediterranean","cabin with balcony",12]);