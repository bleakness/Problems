function tournaments(input) {
    "use strict";

    let games = input.shift();
    let win = 0;
    let lose = 0;

    while(games !== "Finish") {
        let game1 = Number(games);


        for (let i = 0; i < game1; i++) {
            if (i === "win") {
                win++;
            } else if (i === "lose") {
                lose--;
            }
            let sum = win + lose;

            if (win > lose) {
                sum *= 1.1;
            }

            
        }
    }
}