function walking(input){

    let cmd  = input.shift();
    let sum = 0;
    let data = 10000;

    while (cmd !== "Going home") {
        let num = Number(cmd);
        sum += num;
        cmd = input.shift();

        if (sum >= 10000) {
           console.log(`Goal reached! Good job!`);
            break;
        }
    }

    if (cmd === "Going home") {
        let z = Number(input.shift());
        sum += z;
        cmd = input.shift();
        if (sum < data) {
            console.log(`${Math.abs(data - sum)} more steps to reach goal.`);
        } else if (sum >= 10000) {
            console.log(`Goal reached! Good job!`);
        }
    }
}
walking(['1000','1500','2000','6500', 'Going home']);
walking(['1500','300','2500','3000', 'Going home', '200']);
walking(['1500','3000','250','1548', '2000', 'Going home', '2000']);
walking(['125','250','4000','30', '2678', '4682']);