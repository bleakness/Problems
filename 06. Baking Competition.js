function baking(input) {
    let people = Number(input.shift());
    let sum = 0;
    let totalSweet = 0;

    for (let i = 0; i < people; i++) {
        let person = input.shift();
        let countC = 0;
        let countCa = 0;
        let bCount = 0;
        let typeCake = input.shift();

        while (typeCake !== "Stop baking!") {
            let numbersSweets = Number(input.shift());
            totalSweet += numbersSweets;
            switch (typeCake) {
                case "cookies":
                    countC += numbersSweets;
                    sum += numbersSweets * 1.50;
                    break;
                case "cakes":
                    countCa += numbersSweets;
                    sum += numbersSweets * 7.80;
                    break;
                case "waffles":
                    bCount+= numbersSweets;
                    sum += numbersSweets * 2.30;
                    break;
            }
            typeCake = input.shift();
        }
        console.log(`${person} baked ${countC} cookies, ${countCa} cakes and ${bCount} waffles.`);
    }
    console.log(`All bakery sold: ${totalSweet}`);
    console.log(`Total sum for charity: ${sum.toFixed(2)} lv.`);
}
baking([3,"Iva","cookies", 5,"cakes", 3,"Stop baking!","George","cakes",7,"waffles",2,"Stop baking!","Ivan","cookies",6,"Stop baking!"]);