function radar([input]) {

    let speed = Number(input[0]);
    let area = String(input[1]);

    let limit = 0;
    switch (area) {
        case "motorway":
            limit += 130;
            break;
        case "interstate":
            limit += 90;
            break;
        case "city":
            limit += 50;
            break;
        case "residential":
            limit += 20;
            break;
        default:
            break;
    }

    let mat = limit - speed;
    console.log(mat);

    if (mat <= 20) {
        console.log(`speeding`);
    } else if (mat <= 40) {
        console.log(`excessive speeding`)
    } else {
        console.log(`reckless driving`);
    }
}
radar([40,'city']);
radar([21, 'residential']);