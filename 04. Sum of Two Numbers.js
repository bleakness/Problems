function sumOfTwoNumbers(input) {

    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let magicNumber = Number(input.shift());
    let combinationCounter = 0;
    let pause = false;
    for (let i = firstNumber; i <= secondNumber;i++) {
        for (let m = firstNumber; m <= secondNumber;m++) {
            combinationCounter++;
            if (i + m === magicNumber) {
                console.log(`Combination N:${combinationCounter} (${i} + ${m} = ${magicNumber})`);
                pause = true;
                return;
            }

        }
        if (pause) {
            break;
        }


        }
    console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);
}
sumOfTwoNumbers([1,10,5]);
sumOfTwoNumbers([23,
    24,
    20]);