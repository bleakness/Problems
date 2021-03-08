function descendingOrder(n){
    let z = n.toString().split('')
    let arr = [];
    for (let i=0;i<z.length;i++) {
        arr.push(parseInt(z[i]));
    }

    let sort = arr.sort(function(a, b){return b-a});
    let sorted = sort.join('');
    return parseInt(sorted);
}