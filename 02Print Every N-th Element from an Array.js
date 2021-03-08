function printDelimeter(input) {
    let steps = Number(input.pop());


    for (let i = 0; i < input.length; i+= steps) {

        console.log(input[i])
    }
}

printDelimeter(['5', '20','31', '4', '20', '2']);