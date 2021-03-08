function missingLetter(input) {

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

     let start = alphabet.indexOf(input[0]);

        for (let i = 0; i<input.length;i++) {
           if (input[i] !== alphabet[start + i]) {

            console.log(alphabet[start + i]);
           }

        }
    return undefined

}

//missingLetter(["a","b","c","d","f"]);
missingLetter(['O','Q','R','S']);