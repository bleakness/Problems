
function One(input) {

    let count = 0;
    for (let i = 0 ; i < input.length; i++) {
      //  if (input[i] === '(' ) left++;
     if (input[i] === ')') count++;
    }
    console.log(count)
}

One('(())))(')
One('()')