function largestNumber(arg1,arg2,arg3) {

    let result = 0;
    if (arg1 > arg2 && arg1 > arg3) {
        result += arg1;
    } else if (arg2 > arg1 && arg2 > arg3) {
        result += arg2;
    } else if (arg3 > arg2 && arg3 > arg1) {
        result += arg3;
    }

    console.log(`The largest number is ${result}.`);
}
largestNumber(5, -3, 16)