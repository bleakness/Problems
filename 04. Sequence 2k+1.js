function twoPlus(input) {
    let n = Number(input.shift());

    let i = 1;
    while (i <= n) {
        console.log(i);
        i = i * 2 + 1;
    }
}
twoPlus([3]);