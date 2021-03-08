function greetMe(input) {
    "use strict";
        let res = `Hello` + input.charAt(0).toUpperCase() + input.substring(1, input.length).toLowerCase() + '!';
        console.log(res)
}
greetMe('asdD!');

