/*function f(input) {
    let even = [];
    for (let i = 0; i <= input.length; i++) {
        if (i % 2 === 0) {
            even.push(input[i]);
        }
    }
    console.log(even.join(' '));
}*/
/*
function sumFirstLast(arr) {
    let n1 = Number(arr[0]);
    let n2 = Number(arr[arr.length - 1]);
    console.log(n1 + n2);
}*/

/*function negative(input) {

    let res = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            res.unshift(input[i]);
        } else {
            res.push(input[i]);
        }
    }
    console.log(res.join(','))

}*/

/*
function biggestHalf(input) {
    return input.sort().slice(input.length / 2);
}
*/

/*function unc(arr) {
        let result = arr
            .filter((num, i)=>i % 2 === 1)
            .map(x=>x * 2)
            .reverse()
            .join(" ");
        console.log(result);
        //or in one row:
        //let result = arr.filter((num, i)=>i % 2 == 1).map(x=>x * 2).reverse().join(" ");
    }*/


/*function bigEl(input) {
    let max = Number.NEGATIVE_INFINITY;

    input.forEach(row => row.forEach(col => max = Math.max(max, col)))

    console.log(max)
}*/

/*(arr,del) => arr.join(del)  ;*/

/*function printN(input, step) {
   // let stepp = Number(step)
    let res = []
    for (let i = 0; i < input.length; i+=step) {
        res.push(input[i]) + " ";
    }
    return res;
}*/

/*function addRemove(input) {
    let res = [];
    let count = 1;
    for (let i = 0; i < input.length; i++) {
        //  res.push(input[i]);
        if (input[i] === "add") {
            res.push(count++);
        } else if (input[i] === "remove") {
            res.pop(count++);
        }
    }

    if (res[0] === undefined) {
            console.log('Empty')
        } else {
        return res.join('\n');
    }
}*/


/*function rotate(input, percent) {
    for (let i = 0; i < percent % input.length; i++) {
            input.unshift(input.pop());
    }
    console.log(input.join(' '));
}*/
/*rotate(['1', '2', '3','4',], 2);*/

/*function extractSubsq(input) {
        input = input.map(Number)
        let current = [];
        let max = Number.MIN_SAFE_INTEGER
        for (let i = 0; i<input.length;i++) {
            if (input[i] >= max) {
                current.push(input[i]);
                max = input[i];
            }

    }
    return current;
       //  console.log(current.join('\n'));
        //console.log(typeof current)
}*/


/*function srt(input) {
    let s = inpu
        .sort()
        .map((name, index) => {
        let s = `${index + 1}.${name}`
        return s;
    });
    return s.join("\n");
}*//*
console.log(srt(['John','Bob','CCC','Ema']));
*/
/*

function sumMatr(input) {

    let magic = true;

    for (let i = 0; i < input.length; i++) {
        let sum1 = input[i].reduce((a, b) => a + b, 0);

        for (let k = 0; k < input.length; k++) {
            let sum2 = input[k].reduce((a, b) => a + b, 0);

            if (sum1 !== sum2) {
                magic = false;
                break;
            }
        }
    }
    return magic;
}
console.log(sumMatr([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));*/

/*function sortA(input) {
    let z = (a,b)=> a.length - b.length || a.localeCompare(b);
    input.sort(z);
    return(input.join('\n'));
}*/
/*
console.log(sortA(['Deny', 'omen','test','Default']));
*/
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};
console.log(bubbleSort([1, 65, 3, 52, 48, 63, 31, -3, 18,
    56]));