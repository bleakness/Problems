function cake(input) {

    let w = Number(input.shift());
    let h = Number(input.shift());

    let size = h * w;
    let sum = 0;
    let cmd = input.shift();

    while (cmd !== "STOP") {
        let pice = Number(cmd);
        size -= pice;

        if (size < 0) {
            break;
        }
        cmd = input.shift();
    }
    if (cmd === "STOP") {
        console.log(`${size} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(size)} pieces more. `);
    }
}
cake(['10', '10', '20','20','20','20','21']);
cake(['10', '2', '2','4','6','STOP']);