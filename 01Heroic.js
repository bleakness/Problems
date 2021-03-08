function hieronic(input) {

    let res = [];

    for (let line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
    if (!items.hasOwnProperty(items)) {
       items =  items.split(', ');
    } else {
        items = [];
    }
        res.push({name, level, items});
    }



    console.log(JSON.stringify(res))
}

hieronic(['Jake / 1000 / Gauss, HolidayGrenade']);