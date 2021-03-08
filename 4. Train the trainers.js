function trainers(input) {

    let cmd = Number(input.shift());
    let name = input.shift();

    let all = 0;
    let counter = 0;

    while (name !== "Finish") {
       // let n = Number(cmd);
        let sum = 0;
        for (let i = 1; i <= cmd; i++) {
            let grade = Number(input.shift());
            sum += grade;
        }
        let middle = sum / cmd;
        console.log(`${name} - ${middle.toFixed(2)}.`);
        all += middle;
        name = input.shift();
        counter++;
    }

   console.log(`Student's final assessment is ${(all / counter).toFixed(2)}.`)
}


trainers([2, "While-Loop", 6.00, 5.50, "For-Loop", 5.84, 5.66, "Finish"]);