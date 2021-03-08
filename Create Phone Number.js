function phone(input) {

   let s = `(${input.slice(0,3).join('')}) ${input.slice(3,6).join('')}-${input.slice(6).join('')}`;

   console.log(JSON.stringify(s))

}

phone([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);