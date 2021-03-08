function t(input) {

    //let z = input.filter((v,num,arr)=> arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b)=>a+b)
    let z = new Set(input);
    let sum = 0;
    for (let line of z) {
        if (z.has(line)) {
            z.add(line);
            sum+=line;
        } else {
            sum -= line;
        }
    }
    console.log(sum);
}

t([4,5,7,5,4,8]);