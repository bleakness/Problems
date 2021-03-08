function cleanString(s) {
    const result = [];

    for (const c of s) {
        if (c === "#") {
            result.pop()
        } else {
            result.push(c)
        }
    }

    console.log(result.join(""))
}
cleanString('abc#d##c');