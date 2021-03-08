function pyramic(input) {
    let n = Number(input.shift());
    let current = 1;
    let res = "";
    let isBigger = false;
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= r; c++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            res += current + " ";
            current++;
        }

        console.log(res);
        res = "";
        if (isBigger) {
            break;
        }
    }
}
pyramic([7]);