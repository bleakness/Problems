function supplies(input) {

    let himikali = Number(input.shift());
    let markeri = Number(input.shift());
    let preparat = Number(input.shift());
    let percent = Number(input.shift());

    let priceHimikal = himikali * 5.80;
    let priceMarkeri = markeri * 7.20;
    let pricePreparat = preparat * 1.20;

    let allSum = priceHimikal + priceMarkeri + pricePreparat;

    let namalenie = allSum - (allSum * percent / 100);

    console.log(namalenie.toFixed(3));
}

supplies([4,
    2,
    5,
    13]);