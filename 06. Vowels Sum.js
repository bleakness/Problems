function vowelsSum(input) {
    let text = input.shift();
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
     //   let letter = text[i];
        switch (text[i]) {
            case "а":
                sum += 1;
                break;
            case "e":
                sum += 2;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;
        }
    }
    console.log("Vowels sum = " + sum);
}
vowelsSum(["hello"]);
vowelsSum(["baboo"]);