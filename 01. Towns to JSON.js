function towns(input) {
    "use strict";
    let res = [];

    for (let line of input.slice(1)) {
   // const person = JSON.parse(line);
        let [empty,townName,lat,lng]=line.split(/\s*\|\s*/);
        let townObj = {
            Town: townName,
            Latitude: Number(lat).toFixed(2),
            Longitude: Number(lng).toFixed(2),
        };
        townObj.replace
    res.push(townObj);
    }

    console.log(JSON.stringify(res))
}

towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
