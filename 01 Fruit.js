function fruit(fruit, grams, kg) {

    let sum = grams * kg / 1000;
    let weigth = grams / 1000;
    console.log(`I need $${sum.toFixed(2)} to buy ${weigth.toFixed(2)} kilograms ${fruit}.`)
}
fruit('orange', 2500, 1.80);