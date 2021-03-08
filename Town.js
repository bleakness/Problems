function test(towns) {

    let townsArr = [];
    for (let town of towns.slice(1)) {
        let tokens = town.split(" | ");
        let tokObj = {Town: tokens[1], Latitude: Number(tokens[2]), Longitude: Number(tokens[3])}

        townsArr.push(tokObj);
    }

    console.log(JSON.stringify(townsArr));
}

test(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
