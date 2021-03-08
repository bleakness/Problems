function countSheep(num){
    res = '';
    for (let i = 1; i <= num; i++) {
        res += i.toString() + 'sheep...';
    }
    console.log(res)
}

count(2);