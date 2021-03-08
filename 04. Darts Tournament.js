function darts(input) {

    let score = Number(input.shift());
    let counterMove = 0;

   while (score > 0) {
       let nameMachine = input.shift();
       let numberPoints = Number(input.shift());

       if (nameMachine === "bullseye") {
           counterMove++;
           break;
       }
       switch (nameMachine) {
           case "number section":
               score -= numberPoints;
               break;
           case "double ring":
               numberPoints *= 2;
               score -= numberPoints;
               break;
           case "triple ring":
               numberPoints *= 3;
               score -= numberPoints;
               break;
       }
       counterMove++;
   }
       if (score === 0) {
            console.log(`Congratulations! You won the game in ${counterMove} moves!`);
        } else if (score > 0) {
           console.log(`Congratulations! You won the game with a bullseye in ${counterMove} moves!`);
       }else {
            console.log(`Sorry, you lost. Score difference: ${Math.abs(score)}.`);
        }
}
darts([150,"double ring",20,"triple ring", 10,"number section", 20, "triple ring", 20]);

