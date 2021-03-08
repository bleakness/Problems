function circurs(arg1) {
    let tupe = typeof(arg1);
    let res = 0;
    if (tupe === 'number') {
        res = Math.pow(arg1,2) * Math.PI;
        console.log(res.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${tupe}.`);
    }
}

circurs('textx');