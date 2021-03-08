function savings(input) {

    let mesec = Number(input.shift());
    let meseci = Number(input.shift());
    let suma = Number(input.shift());


    let all = mesec * 0.30;
    let res = mesec - (suma + all);
    let percent = res / mesec * 100;
    let alabala = meseci * res;

    console.log(`She can save ${percent.toFixed(2)}%`);
    console.log(`${alabala}`)
}

savings([1500,
    3,
    800])