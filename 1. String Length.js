function stringLength([a,b,c]) {
    let sumAll;
    let sumAverage;

    let first = a.length;
    let second = b.length;
    let third = c.length;

    sumAll = first + second + third;
    sumAverage = Math.floor(sumAll / 3);
    console.log(sumAll);
    console.log(sumAverage);
}

stringLength(['chocolate', 'ice cream', 'cake']);
stringLength(['pasta', '5', '22.3']);