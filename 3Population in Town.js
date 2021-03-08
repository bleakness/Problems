function populationInTown(input) {

    let obj = {};
    for (let line of input) {
        let [town, people] = line.split('/([A-Za-z\\s]+)\\s+<->\\s+([\\d]+)/g');
        people = Number(people);

        if (obj.hasOwnProperty(town)) {
            obj[town] += people;

        } else {
            obj[town] = 0;
        }
        Object.keys(obj).forEach(x => console.log(`${x} : ${obj[x]}`));
    }


}
populationInTown([
        "Istanbul <-> 100000",
        "Honk Kong <-> 2100004",
        "Jerusalem <-> 2352344",
        "Mexico City <-> 23401925",
        "Istanbul <-> 1000"
    ]
);