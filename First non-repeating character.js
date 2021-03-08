function firstNonRepeatingLetter(s) {


    for (let i = 0; i < s.length -1 ; i++) {


        let current = s[i].toCharAt(0);
        let next = s[i + 1].toCharAt(0);


        if (current !== next) {
           return  String.fromCharCode(1);
        }
    }
    return "";
}
firstNonRepeatingLetter('sTreSS');
firstNonRepeatingLetter('a');