function friend(friends){
    //your code here
    let f = [];

    for (let k = 0; k < friends.length; k++) {
        //  console.log(input[k])
        if (friends[k].length === 4 ) {
            f.push(friends[k])
        }
    }
    return f;
}

friend(["Ryan", "Kieran", "Mark"]);