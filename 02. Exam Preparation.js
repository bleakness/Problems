function test(input) {
    let inputGrades = Number(input.shift());

    let counterBadGrades = 0;
    let counterGrades = 0;
    let sumGrades = 0;
    let lastProblem = "";
    let aver = 0;

    while (counterBadGrades <= inputGrades) {
        let nameExcersice = input.shift();
        let grade = Number(input.shift());

        if (nameExcersice === "Enough") {

            aver = sumGrades / counterGrades;
            console.log(`Average score: ${aver.toFixed(2)}`);
            console.log(`Number of problems: ${counterGrades}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }

        if (grade <= 4) {
            counterBadGrades++;
        }
        sumGrades+= grade;
        counterGrades++;
        lastProblem = nameExcersice;
    }

    if (counterBadGrades === inputGrades){
        console.log(`You need a break, ${counterBadGrades} poor grades.`)
    }
}