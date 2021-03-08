function graduation(input) {
    let name = input.shift();
    let counter = 1;
    let sum = 0;
    while (counter <= 12) {
        let grade = Number(input.shift());
        if (grade >= 4.00) {
           continue;
        }
        sum += grade;
        counter++;
    }
    let average = Math.abs(sum / 12);
   console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
}

graduation(["Pesho", '4', '5.5','6', '5.43', '4.5', '6', '5.55', '5', '6']);