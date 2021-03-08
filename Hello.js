function hi(input) {

    //let name = input[0];
   // console.log(name);

   // let name = input[0].toUpperCase() + input.substring(1,6).toLowerCase();

   //let z = input.replace(/\b\w/, v => v.toUpperCase());


      //  let s = input[0].toUpperCase() + input.slice(1);

    if (input) {
      return   "Hello, " + input.substring(0,1).toUpperCase() + input.substring(1).toLowerCase() + '!';
    } else {
        return "Hello, World!";
    }


}
hi();