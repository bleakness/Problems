function duplicateEncode(word){

    let currentChar = "";
    //let spl = word.toLowerCase().split('');
    let low = word.toLowerCase();
    for (let i = 0; i<low.length;i++) {
        let fak = low.charAt(i);
        if(low.indexOf(fak) === low.lastIndexOf(fak)) {
            currentChar += "(";
        } else {
            currentChar += ")";
        }
    }
    console.log(currentChar);
}

duplicateEncode("din");
duplicateEncode("Success");

/*
function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}*/
