function regexATM(pin) {
    let reg = /^(\d{4}|\d{6})$/.test(pin);

    if(pin.length === 4 || pin.length === 6){
        return reg;
    }
    return false

}

regexATM([`12345`]);