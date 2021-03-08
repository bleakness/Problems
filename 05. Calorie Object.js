function calorie(input) {

    let res = {};

    for (let i = 0; i < input.length; i+=2) {
        res[input[i]] = parseInt(input[i+1])
    }
    return res;
}

console.log(calorie(['Yoghurt','48', 'Rise', '138', 'Apple', '52']))    ;