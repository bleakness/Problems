function unique(arr) {

    let unique = [];
    let sorted = arr.sort(function (a,b) {
        return a - b;
    });

    for (let i = 0; i < sorted.length; i++) {

        if( sorted[i] !== sorted[i + 1] && sorted[i] !== sorted[i - 1]) {
            unique.push(sorted[i]);
        }
    }

  // let x  = arr.filter((v,i,arr) => arr.indexOf(v) === i);
    console.log(unique[0])
}

unique(([1, 1, 1, 2, 1, 1]));
unique([ 0, 0, 0.55, 0, 0 ]);