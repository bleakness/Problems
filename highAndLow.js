function highAndLow(numbers){
    let spl = numbers.split(' ').sort((a,b) => a - b);
    const min = Number(spl[0])
    const max = spl[spl.length-1]

    return `${max} ${min}`
}

//  return `${Math.max(...nums)} ${Math.min(...nums)}`;