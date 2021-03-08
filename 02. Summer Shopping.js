function summerShopping(input) {


    let fullBudget = Number(input.shift());
    let havliqPrice = Number(input.shift());
    let percent = Number(input.shift());

    let havliqCena = 2 * havliqPrice / 3;
    let djapanki = havliqCena * 0.75;
    let chanta = (havliqPrice + djapanki) / 3;
    let sum = havliqPrice + havliqCena + djapanki + chanta;
    let all = sum - sum * percent / 100;

  

    let resto = Math.abs(all - fullBudget);

    if (all > fullBudget) {
        console.log(`Annie's sum is ${all.toFixed(2)} lv. She needs ${resto.toFixed(2)} lv. more.`);
    } else {
        console.log(`Annie's sum is ${all.toFixed(2)} lv. She has ${resto.toFixed(2)} lv. left.`);
    }

}
summerShopping([40,15,5]);
summerShopping([25,6, 10]);
summerShopping([30,17,3]);