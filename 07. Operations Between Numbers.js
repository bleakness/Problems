function operator(input) {
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let operator = input.shift();

    let math = 0;


    switch (operator){
        case "+":
            math = n1 + n2;
            if (math % 2 === 0) {
                console.log(`${n1} + ${n2} = ${math} - even`);
            } else {
                console.log(`${n1} + ${n2} = ${math} - odd`);
            }
            break;
        case "-":
            math = n1 - n2;
            if (math % 2 === 0) {
                console.log(`${n1} - ${n2} = ${math} - even`);
            } else {
                console.log(`${n1} - ${n2} = ${math} - odd`);
            }
            break;
        case "*":
            math = n1 * n2;
            if (math % 2 === 0) {
                console.log(`${n1} * ${n2} = ${math} - even`);
            } else {
                console.log(`${n1} * ${n2} = ${math} - odd`);
            }
            break;
        case "/":
            math = n1 / n2;
            if (n1 === 0 || n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`)
            } else {
                console.log(`${n1} / ${n2} = ${math.toFixed(2)}`);
            }

            break;
        case "%":
            math = n1 % n2;
            if (n1 === 0 || n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`)
            } else {
                console.log(`${n1} % ${n2} = ${math}`);
            }
    }
}

operator([10,0,"%"]);