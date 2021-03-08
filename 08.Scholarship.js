function Scholarship(input) {

    let dohodBGN = Number(input.shift());
    let sredenUspeh = Number(input.shift());
    let minimalnaZaplata = Number(input.shift());

    if (dohodBGN <= minimalnaZaplata) {
        if (sredenUspeh >= 4.5) {
            minimalnaZaplata *= 0.35;
            console.log(`You get a Social scholarship ${Math.floor(minimalnaZaplata)} BGN`)
        } else if(sredenUspeh >= 5.5) {
            minimalnaZaplata *= 25;
            console.log(`You get a scholarship for excellent results  ${Math.floor(minimalnaZaplata)} BGN`)
        } else if(sredenUspeh < 4.5) {
            console.log(`You cannot get a scholarship!`)
        }
    } else {
        console.log(`You cannot get a scholarship!`)
    }
}

Scholarship([480.00,4.60,450.00]);
Scholarship([300.00, 5.65,420.00]);