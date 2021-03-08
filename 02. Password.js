function pass(input) {

    let username = input.shift();
    let password = input.shift();
    let date = input.shift();

    while (date !== password) {
        date = input.shift();
    }

    console.log(`Welcome ${username}`);
}

pass(["Nakov","1234","pass","1324","1234"]);