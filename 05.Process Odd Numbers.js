function oddEl(input) {

    let masiv = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 1) {
            masiv.push(i);
            masiv *= 2;
        }
    }
    console.log(masiv);
}
oddEl([10, 15, 20, 25]);