function print(input) {
    "use strict";
    let res = [];
    let delimeter = input.pop();
    for (let i = 1; i <= input.length; i++) {
        res = input;
    }
    console.log(res.join(delimeter));
}
print(['edno', 'dve','tri', '-']);