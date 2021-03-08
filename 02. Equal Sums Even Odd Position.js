function equalSum(input) {

    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let print = "";

    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNum = "" + i;
        let odd = 0;
        let even = 0;

        for (let j = 0; j < currentNum.length; j++) {
            let curentDigit = currentNum.charCodeAt(j);
            if (j % 2 === 0) {
                odd += curentDigit;
            } else {
                even += curentDigit;
            }
            }
        if (odd === even) {
            print += i + " " ;
        }
    }
    console.log(print);
}
equalSum(['100000', '100050']);
equalSum(['100115', '100120']);
