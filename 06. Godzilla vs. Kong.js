function godzilla(input) {
    let budget = Number(input.shift());
    let numberStatisti = Number(input.shift());
    let oneStatist = Number(input.shift());

    let sumDecor = budget * 0.10;
    let sumaObleklo = Math.abs(numberStatisti * oneStatist);

    let cqlaSuma = Math.abs(sumaObleklo+sumDecor);
    let total = sumDecor + sumaObleklo;

    let discount = sumaObleklo * 0.10;
    let res = budget - cqlaSuma;

    if (numberStatisti >= 150) {
        total = Math.abs(sumaObleklo + sumDecor - discount);
    }


    if (total <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${Math.abs(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(budget - total).toFixed(2)} leva more.`);
    }
}

godzilla([20000, 120, 55.5]);
godzilla([15437.62,186,57.99]);
godzilla([9587.88, 222,55.68]);