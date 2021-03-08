function matrix(input) {
    let magic = true;


    for (let i = 0; i < input.length; i++) {
        let sum1 = input[i].reduce((a, b) => a + b, 0)

        for (let k = 0; k < input.length; k++) {
            let sum2 = input[k].reduce((a, b) => a + b, 0)

            if (sum1 !== sum2) {
                magic = false;
                break;
            }
        }
    }

    console.log(magic);

    //    console.log(arr.join('\n'))

}

matrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

matrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])

matrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])