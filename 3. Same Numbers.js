function sameNumbers(input) {

    input = String(input);
    let sum = 0;
    let check = true;
    let firstDigit = input[0];
    for (i = 0; i < input.length; i++) {
        sum += +input[i];

        if (input[i] !== firstDigit) {
            check = false;

        }
    }
    console.log(check);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);