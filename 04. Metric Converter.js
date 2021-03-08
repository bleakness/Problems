function metricConverter(input) {

    let valuta = Number(input.shift());
    let vhod = input.shift();
    let izhod = input.shift();

    if (vhod === "mm") {
        valuta /= 1000;
    } else if (vhod === "cm") {
        valuta /= 100;
    }

    if (izhod === "mm") {
        valuta *= 1000;
    } else if (izhod === "cm") {
        valuta *= 100;
    }

    console.log(valuta.toFixed(3))
}

metricConverter([12, "mm", "m"])