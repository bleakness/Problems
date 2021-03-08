function solution(input) {
    let answer = 0;
    let compare = 0;
    for (let i = 1; i < input.length; i++) {
        compare = input.slice(i, i + 5);
        if (answer < compare) {
            answer = compare;
        }
    }
    return Number(answer);
}