function sort(input) {

    input.sort(kriterii);
    let res = [];



    for (let i = 0; i <= input.length; i++) {
        res.push(input[i]);
    }
    console.log(res.join('\n'));

    function kriterii(cur, next) {
        if (cur.length > next.length) {
            return 1;
        } else if (cur.length < next.length) {
            return -1;
        } else {
            return 0
        }
    }
}

sort(['alpha', 'beta', 'gama']);