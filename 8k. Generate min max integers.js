function generateRange(min, max, step){
    let arr = []

    for (let i = min; i <= max; i += step) {
        arr.push(i)
    }
    return arr;
}
generateRange(2, 10, 2)