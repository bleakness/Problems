function evenOdd(input) {

    let n = Number(input.shift());

    let even = 0;
    let odd = 0;

    for (let i = 0; i < n; i++) {
        let element = Number(input.shift());
        if (i % 2 === 0) {
            even += element
        } else {
            odd += element;
        }
    }
    let diff = Math.abs(even - odd);

    if (even === odd) {
        console.log(`Yes`);
        console.log(`Sum = ${even}`);
    } else {
        console.log(`No`);
        console.log(`Diff = ${diff}`);
    }
}
evenOdd([4,
    10,
    50,
    60,
    20]);