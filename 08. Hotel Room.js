function hotelRoom(input) {
    let month = input.shift();
    let numbers = Number(input.shift());
    let studio = 0;
    let apartament = 0;

    if (month === "May" || month === "October") {
        studio = 50;
        apartament = 65;
        if (numbers > 7) {
            studio *= 0.95;
        }  else if (numbers > 14) {
            studio *= 0.9;
            apartament *= 0.7;
        }
    } else if (month === "June" || month === "September") {
        studio = 75.20;
        apartament = 68.70;
        if (numbers > 7) {
           // studio *= 0.8;
        } else if (numbers > 14) {
            studio *= 0.8;
        }
    } else if (month === "July" || month === "August") {
        studio = 76;
        apartament = 77;
    }

    if (numbers > 14) {

        apartament *= 0.9;
    }

    let apartSum = apartament * numbers;
    let studioSum = studio * numbers;

    console.log(`Apartament: ${apartSum.toFixed(2)} lv.`);
    console.log(`Studio: ${studioSum.toFixed(2)} lv.`);
}
hotelRoom(["May", 15]);
//hotelRoom(["June", 14]);