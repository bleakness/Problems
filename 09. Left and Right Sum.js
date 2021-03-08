function leftRigth(input) {

    let number = Number(input.shift());
    let leftSum = 0;

    for (let i = 0; i < number; i++) {
        leftSum += Number(input.shift());
    }

    let rightSum = 0;

    for (let i = 0; i < number; i++) {
        rightSum += Number(input.shift());
    }

    if (leftSum === rightSum) {
        console.log(`Yes, sum = ${leftSum}`)
    } else  {
        let diff = Math.abs(leftSum - rightSum);
        console.log(`No, diff = ${diff}`)
    }
}
leftRigth([2,
    10,
    90,
    60,
    40]);

leftRigth([2,
    90,
    9,
    50,
    50]);