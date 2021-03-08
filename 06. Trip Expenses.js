function trip(input) {
    //let days = Number(input.shift());
    let cmd = input.shift();
    let sum = 0;
    let counter = 0;
    let netxtDay = 0;
    while (cmd !== "Day over") {
        counter++;
        for (let i = 0; i < cmd; i++) {
            let productsPrice = Number(input.shift());
            sum += productsPrice + productsPrice;
            counter++;
            if (sum >= 60) {
                console.log(`Daily limit exceeded! You've bought ${counter} products.`);
                break;
            } else {
                netxtDay += 60 - sum;
            }
            cmd = input.shift();
            productsPrice = Number(input.shift());
        }
    }
    if (sum >= 60) {
        console.log(`Daily limit exceeded! You've bought ${counter} products.`)
    } else {
        console.log(`Money left from today: ${netxtDay}. You've bought ${counter} products.`)
    }

}

trip([3, 20, 40, 40, 15, "Day over", 15, 5, 10, 17, 10, "Day over"]);
trip([2, "Day over", 100, 20]);