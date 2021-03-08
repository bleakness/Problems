function sumSeconds(input) {

    let timeOne = Number(input.shift());
    let timeTwo = Number(input.shift());
    let timeTree = Number(input.shift());

    let sum = timeOne + timeTwo + timeTree;

    let mins = Math.floor(sum / 60);
    let sec = sum % 60;

    if (sec < 10) {
        console.log(`${mins}:0${sec}`)
    } else {
        console.log(`${mins}:${sec}`)
    }
}

sumSeconds([35,45,44]);