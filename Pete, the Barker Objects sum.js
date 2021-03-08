function cakes(recipe, available) {

    let s = [];
    for (let key in recipe) {
        if (key in available) {
            let num = Math.floor(available[key] / recipe[key]);
            s.push(num)
        } else {
            return 0;
        }
    }
    console.log(Math.min(parseInt(s)));
}
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
