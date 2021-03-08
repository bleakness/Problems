function mathOperation(num1, num2, operator) {
    "use strict";
    let res = 0;

    switch (operator) {
        case '+': res = num1 + num2; break;
        case '-': res = num1 - num2; break;
        case '/': res = num1 / num2; break;
        case '*': res = num1 * num2; break;
        case '%': res = num1 % num2; break;
        case '**': res = num1 ** num2; break;

    }
    console.log(res)

}

mathOperation(5,6, '**');