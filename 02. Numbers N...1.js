function nTo1(input) {

    let number = Number(input.shift());

    for (let i = number; i > 0; i--) {
        console.log(i)
    }
}
nTo1([5]);