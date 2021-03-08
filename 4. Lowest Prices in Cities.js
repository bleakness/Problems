function lowestPricesInCities(input) {

        // make an object
    let obj = {};
    // loop the object

    for (let line of input) {
        let [town, product, price] = line.split((" | "));
        //cast to Number
        price = Number(price);

        // if exist continue;
        if (obj.hasOwnProperty(town)) {

            obj[town] += town;
        } else {
            obj[town] = 0;
        }
        // foreach object

        Object.keys(h).forEach(x => console.log(`${product} -> ${price} ${town}`));



}}

lowestPricesInCities(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10']);
