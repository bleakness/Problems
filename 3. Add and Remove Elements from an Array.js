function addRemoveArray(input) {

    let res = [];
    let count = 1;
    for (let i = 0 ; i < input.length; i++) {
        if (input[i] === "add") {
            res.push(count)
        }
        else if (input[i] === "remove") {
            res.pop(count)
        }
    count++;
    }
            if (res.length === 0) {
            console.log("Empty");
        } else {
        console.log(res.join(''))
    }}
addRemoveArray(['add', 'add','add', 'add']);

addRemoveArray(['add', 'add', 'remove', 'add', 'add']);
addRemoveArray(['remove', 'remove', 'remove']);