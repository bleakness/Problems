function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    let diff = birds.filter(x => !geese.includes(x))
    return diff;
}

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
