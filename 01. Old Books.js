function oldBook(input) {

    let book = input.shift();
    let number = Number(input.shift());
    let nextBook = input.shift();
    let counter = 0;
    let isFound = false;

    while (counter !== number) {

        if (nextBook === book) {
            isFound = true;
            break;
        }
        counter++;
        nextBook = input.shift();
    }

    if (isFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${number} books`);
    } else {
        console.log(`You checked ${counter} books and found it.`);
    }
}
oldBook(["Troy",8,"Stronger","Life Style","Troy"]);