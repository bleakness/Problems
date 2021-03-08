function cruisGames(input) {

    let nameGamer = input.shift();
    let games = Number(input.shift());
    let voleyGames = 0;
    let voleyCount = 0;

    let tennisGames = 0;
    let tenisCount = 0;

    let badmintonGames = 0;
    let badmintonCount = 0;
    let totalScore = 0;

        for (let i = 0; i < games; i++) {
        let gameName = input.shift();
        let points = Number(input.shift());

            switch (gameName) {
                case "volleyball":
                    points = points * 1.07;
                    voleyCount++;
                    voleyGames += points;
                    break;
                case "tennis":
                    points = points * 1.05;
                    tenisCount++;
                    tennisGames += points;
                    break;
                case "badminton":
                    points = points * 1.02;
                    badmintonCount++;
                    badmintonGames += points;
                    break;
            }
            totalScore += points;

    }
    let v = Math.floor(voleyGames / voleyCount);
    let t = Math.floor(tennisGames / tenisCount);
    let b = Math.floor(badmintonGames / badmintonCount);
    let middle = Math.floor(totalScore / games);
    //console.log(middle)
    if (v >= 75 && t >= 75 && b >= 75) {
        console.log(`Congratulations, ${nameGamer}! You won the cruise games with ${Math.floor(totalScore)} points.`)
    } else{
        console.log(`Sorry, ${nameGamer}, you lost. Your points are only ${Math.floor(totalScore)}.`);
    }
}
cruisGames(["Pepi", 3,"volleyball", 78,"tennis", 98, "badminton", 105]);
cruisGames(["Annie",5,"badminton",34,"tennis",76, "badminton",10 , "volleyball",62,"badminton",56]);