function differenceInAges(ages) {

    let sorted = ages.sort((a,b) => a - b);

    let min = sorted[0];
    let max = sorted[ages.length-1];
    let diff = Number(max - min);
    console.log([min,max,diff]);

}
differenceInAges([82, 15, 6, 38, 35]);

/*

function differenceInAges(ages) {
    return [Math.min(...ages),Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
}
*/
