function readText(input) {

    let text = input.shift();

    while (text !== "Stop") {
         text = input.shift();

    }

}

readText(["ih","aa", "Stop", "ff"]);