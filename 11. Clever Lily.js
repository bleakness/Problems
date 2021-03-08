function cleverLily(input) {

    let years = Number(input.shift());
    let peralnq  = Number(input.shift());
    let igrachka = Number(input.shift());

    let deset = 0;
    for (let i = 0; i < years; i++){
        years = Number(input.shift());
        if (years % 2 === 0) {
            deset += years;
        }
    }

}