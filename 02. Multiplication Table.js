function multi() {

    for(let i = 1; i<=10;i++) {
        for (let m = 1; m <= 10; m++){
            let res = i * m;
            console.log(`${i} * ${m} = ${res}`)
        }
    }
}
multi();