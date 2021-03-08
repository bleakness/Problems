function pairs(arr){
    //..
    let count = 0;
    for (let i = 0; i<arr.length;i++) {
        if(i % 2 === 0) {
            if (arr[i+1] - arr[i] === 1 || arr[i] - arr[i+1] === 1) {
                count++;
            }
        }
    }
    console.log(count);
};
pairs([1,2,5,8,-4,-3,7,6,5]);

/*
function pairs(array, count = 0) {
    for (let i = 0; i < array.length; i += 2)
        if (Math.abs(array[i] - array[i + 1]) === 1)
            count += 1;
    return count;
}*/
