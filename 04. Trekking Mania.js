function trekkingMania(input) {

    let n = Number(input.shift());

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;
    let pet = 0;
    let six = 0;
    let seven = 0;
    let eigth = 0;
    let nine = 0;
    let allsum = 0;

    for (let i = 1; i <= n; i++) {
        let z = Number(input.shift());
        allsum += z;

        if (z <= 5) {
            sum1 += z;
        } if (z >= 6 && z <= 12) {
            sum2 += z;
            console.log(sum2);
        } if (z >= 13 && z <= 25) {
            sum3 += z;
        }if (z >= 26 && z <= 40) {
            sum4 += z;
        } if(z >= 41) {
            sum5 += z;
        }
        pet = (sum1 / allsum) * 100;
        six = (sum2 / allsum) * 100;
        seven = (sum3 / allsum) * 100;
        eigth = (sum4 / allsum) * 100;
        nine = (sum5 / allsum) * 100;

        }

    console.log(allsum);
   // console.log(sum);
    console.log(`${pet.toFixed(2)}%`);
    console.log(`${six.toFixed(2)}%`);
    console.log(`${seven.toFixed(2)}%`);
    console.log(`${eigth.toFixed(2)}%`);
    console.log(`${nine.toFixed(2)}%`);


}


trekkingMania([10,
10,
5,
1,
100,
12,
26,
17,
37,
40,
78]);