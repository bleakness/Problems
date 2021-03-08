function sumTowns(input) {

    let sum = {};
   // let arr = JSON.parse(input);

    for (let i = 0; i < input.length; i+=2) {

        if (sum.hasOwnProperty(input[i])) {
            sum[input[i]] = sum[input[i]] + Number([input[i + 1]])
        }
        else  {
            sum[input[i]] = Number(input[i+1]);
        }
    }
    console.log(JSON.stringify(sum))
}
sumTowns(['Sofia', '20', 'Varna', '3','Sofia', '5','Varna', '4',]);
