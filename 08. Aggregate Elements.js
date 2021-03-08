function agregate(input) {

    let n = Number(input.shift());
    let sum = 1;
    let del = 0;
    let concat = "";

    for(let i = 0; i <= n; i++) {
        z = Number(input.shift());
      sum += z;
      del += sum / i;
    }
    console.log(sum);
    console.log(del )
  
}
agregate([1,2,3]);