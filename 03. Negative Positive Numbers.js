function Np(input) {

    let specialSort = arr => {
        let result = [];

        arr.forEach(element => { element < 0
            ? result.unshift(element)
            : result.push(element);
        });

        return result.join('\n')
    };

}
console.log(Np([7, -2, 8, 9]));
Np([7, -2, 8, 9]);
Np([3, -2, 0, -1]);