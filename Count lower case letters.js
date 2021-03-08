function lowercaseCount(str){
    let small = str.replace(/[^a-z]/g, '');
    return small.length;
}