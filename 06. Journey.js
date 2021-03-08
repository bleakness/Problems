function jorney(input) {

    let budget = Number(input.shift());
    let season = input.shift();

    let discount = 0;

    if (budget <= 100) {
        if (season === "summer") {
            discount = budget * 0.30;
            console.log(`Somewhere in Bulgaria`);
            console.log(`Camp - ${discount.toFixed(2)}`);
        } else if (season === "winter") {
            discount = budget * 0.70;
            console.log(`Somewhere in Bulgaria`);
            console.log(`Hotel - ${discount.toFixed(2)}`);
        }
    } else if (budget <= 1000) {
        if (season === "summer") {
            discount = budget * 0.40;
            console.log(`Somewhere in Balkans`);
            console.log(`Camp - ${discount.toFixed(2)}`);
        } else if (season === "winter") {
            discount = budget * 0.80;
            console.log(`Somewhere in Balkans`);
            console.log(`Hotel - ${discount.toFixed(2)}`);
        }
    } else if (budget > 1000) {
        if (season === "summer" || season === "winter") {
            discount = budget * 0.90;
            console.log(`Somewhere in Europe`);
            console.log(`Hotel - ${discount.toFixed(2)}`);
        }
    }
}

//jorney([72, "Winter"]);
//jorney([312, "Summer"]);
//jorney([678.53, "Winter"]);
//jorney([1500 , "Summer"]);
jorney([678.53, "winter"]);