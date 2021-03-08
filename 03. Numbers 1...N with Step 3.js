function nto3(input) {
    let number = Number(input.shift());

    for (let i = 1; i <= number; i +=3) {
        console.log(i);
    }
}

nto3([10]);