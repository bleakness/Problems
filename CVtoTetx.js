/*
function alfa(input) {
    "use strict";

    let alfa = input.split('');
    let text = '';
    let res = [];
    for (let i =0;i<alfa.length;i++) {
        let code = alfa.toUpperCase().charCodeAt(i)
        if (text) {
            res.push(text)
         }
    }
    console.log()
}

alfa("The sunset sets at twelve o' clock.");
*/
function toCsvText(array) {
    // good luck
  //  let z = array.split(',');
    let str = '';
    for (let i = 0; i < array.length; i++) {
        str += array[i] + '\n';

        //.log()
    }
    return (str).slice(0,-1)
}
toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
] );