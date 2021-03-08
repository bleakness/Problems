function rotateArr(input) {

    let last = input.pop();
    last %= input.length;
    let res = [];
    for (let i = 0 ; i < last; i++) {
        let res = input.pop()
     input.unshift(res);
    }

    console.log(input.join(' '))
}
rotateArr(['1', '2','3', '4', '2']);
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15']);