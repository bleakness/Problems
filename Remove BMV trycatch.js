function removeBMW(str){
    if (typeof str === 'string') {
        return str.replace(/[bmw]/gi, '')
    } throw new Error("This program only works for text.")
};