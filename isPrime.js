
function isPrime(num) {

    if (num < 2) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        const maximumDividor = Math.sqrt(num) + 1;
        for (let i = 2; i < maximumDividor; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }}
