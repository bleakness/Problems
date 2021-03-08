function TailoringWorkShop(input) {
    let tables = Number(input.shift());
    let length = Number(input.shift());
    let width = Number(input.shift());

    let pokrivki = tables * (length + 2 * 0.30) * (width + 2 * 0.30);
    let kareta = tables * (length/2) * (length/2);

    let usd = pokrivki * 7 + kareta * 9;
    let lev = usd * 1.85;

    console.log(`${usd.toFixed(2)} USD`);
    console.log(`${lev.toFixed(2)} BGN`)
}
TailoringWorkShop([5,1.00,0.50]);