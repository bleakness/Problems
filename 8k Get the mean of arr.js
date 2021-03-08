function getAverage(marks){

    let res = 0;
    for (let i = 0;i < marks.length; i++) {
        res += marks[i];
    }
    console.log(Math.floor(res / marks.length))
}
getAverage([2,2,2,2]);