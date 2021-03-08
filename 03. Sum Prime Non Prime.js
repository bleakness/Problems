function sumPrime(input) {

    let numbers = input.shift();

    let sumPrime = 0;
    let nonPrime = 0;
    let isPrime = false;

    while (numbers !== "stop") {
        let n = Number(numbers);

        isPrime = true;
        if (n < 0) {
            console.log(`Number is negative.`);
            numbers = input.shift();
            continue;
        }

        if (n === 1) {
            isPrime = false;
        } else if (n === 2) {
            isPrime = true;
        }
        else {
            for (let i = 2; i <= n; i++) {
                if (n % i === 0 && i !== n) {
                    isPrime = false;
                    break;
                }
            }
        }
            if (isPrime) {
                sumPrime += n;
            } else {
                nonPrime += n;
            }
            numbers = input.shift();
        }
        console.log(`Sum of all prime numbers is: ${sumPrime}`);
        console.log(`Sum of all non prime numbers is: ${nonPrime}`);
}
sumPrime([3,
    9,
    0,
    7,
    19,
    4,
    "stop"]);

sumPrime([0,
    -9,
    "stop"]);
sumPrime([30,
    83,
    33,
    -1,
    20,
    "stop"]);
