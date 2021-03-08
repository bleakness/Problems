function catalog(input) {

    let catalog = {};

    for (let line of input) {
        let [name, price] = line.split(' : ');
        price = Number(price);
        let letter = name[0];

        if (catalog.hasOwnProperty(letter) === false){
            catalog[letter] = {};
        }

       catalog[letter][name] = price;

    }
  //  console.log(catalog)

    let sort = Object.keys(catalog).sort((a,b) => a.localeCompare(b));
  //  console.log(sort)

    for (let key of sort) {
        console.log(key)
        let sortedProducts = Object.keys(catalog[key]).sort((a,b) => a.localeCompare(b));

        for (let product of sortedProducts) {
            console.log(`\t${product}: ${catalog[key][product]}`);
        }
    }
}


catalog(['Appriot: 20.4','Frara : 1500', 'TV: 333','Apple: fasasa']);