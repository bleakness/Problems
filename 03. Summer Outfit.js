function summerOutfit(input) {

    let degrees = Number(input.shift());
    let day = input.shift();

    if (day === "Morning") {
        if (degrees >= 10 && degrees <= 18) {
            console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`);
        } else if (degrees > 18 && degrees <= 24) {
            console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
        } else if (degrees >= 25) {
            console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
        }
    } else if (day === "Afternoon") {
        if (degrees >=  10 && degrees <= 18) {
            console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
        } else if (degrees > 18 && degrees <= 24) {
            console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
        } else if (degrees >= 25) {
            console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);
        }}
     else if (day === "Evening") {
        if (degrees >=  10 && degrees <= 18) {
            console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
        } else if (degrees > 18 && degrees <= 24) {
            console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
        } else if (degrees >= 25) {
            console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
        }
}}
summerOutfit([16,"Morning"]);