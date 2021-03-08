function world(input) {

    let seconds = Number(input.shift());
    let meters = Number(input.shift());
    let onemeter = Number(input.shift());

    let time = meters * onemeter;
    let fifteenMeters = Math.floor(meters / 15) * 12.5;

    let allTime = Math.abs(time + fifteenMeters);

    let resultRecord = Math.abs(allTime - seconds);

    if (seconds <= allTime) {
    console.log(`No, he failed! He was ${resultRecord.toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${allTime.toFixed(2)} seconds.`)
    }
}

world([10464, 1500, 20]);
world([55555.67,
    3017,
    5.03]);