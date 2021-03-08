function evenChars(string) {
//keep coding!
    if (string.length < 2 || string.length > 100) {
        return 'invalid string';
    }
        let result = [];

        for (i = 1; i < string.length; i += 2) {
            result.push(string[i]);
        }
        console.log(result);
        }
evenChars ("abcdefghijklm");
