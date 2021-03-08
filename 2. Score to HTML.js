/*
//simple dot notation
let obekt = {
    ime: " ala bala ",
    grad: " fak uu ",
    durjava: " Spain ",
    test: "test",
    //this
    fullName: function () {
        return this.ime + this.durjava;
    }
}
//keys
//value
// entries

let keys = Object.entries(obekt);
let proba = Object.keys(obekt);
if (obekt.hasOwnProperty('test')) {
    console.log(obekt.test)
}
console.log(proba);
console.log(keys

);
console.log(obekt.fullName());
// bracket notation
let obekt2 = ['hi'];
console.log(obekt2);

console.log(JSON.stringify(obekt.ime));

for (const value of Object.entries(obekt)) {
    console.log(value)
}
// freaze and seal
let ob = { name: 'Tom', system: "Gnome"}
Object.freeze(ob);
ob.system = 10;

console.log(ob);

// JSON
// ARrray
*/

/*let someArr = [1, 2, 3, 4, 4000];

function addEl(arr, el) {
    arr.push(el);
}
addEl(someArr, 5);

someArr.sort(function (a,b) {
    return a-b;
});
    console.log(someArr);

console.log(someArr.join(' // '))
let k = someArr.includes(4);

let z = someArr.slice(1,3);
console.log(z)
const copy = [];

//forEach cqla kolekciq nqma break
someArr.forEach(i => {copy.push(i);}); {
    console.log(copy)
}

for (let i = 0; i < someArr.length; i++) {
    console.log(someArr )
}

//filter

function biggestNums(value) {
    return value <= 3;
}
console.log(someArr.filter(biggestNums));

//find
let found = someArr.find(function (element) {
    return element > 3;
});
console.log(found);
let arr = [1, 2, 3];

let roots  = arr.map(function (el) {
    return el * 2;
});

console.log(roots);*/
/*
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));

let m = [[9,3], [8, 3], [6,7]];

let sortFn = (a,b) => a-b;
let xm = m.map(i => i[0]).sort(sortFn);
let sm = m.map(i => i[1]).sort(sortFn);
let res1 = xm.map((item, index) => ([item, sm[index]]));
console.log(m);*/
function scoreToHTML(input) {


    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    let json = input;
    let objArr = JSON.parse((json));

    let html = `<table>\n`;
    html += `<tr><th>name</th><th>score</th><th>email</th></tr>\n`;

    for (let obj of objArr) {
        html += `<tr><td>${htmlEscape(obj.name)}</td><td>${obj.score}</td><td>${obj.email}</td></tr>\n`;
    }
    html += `</table>`;
    console.log(html)

}



scoreToHTML(['[{"name":"Pesho","score":479, "email": "qko@mail.com"},{"name":"Gosho","score":205, "email": "qko@mail.com"}, {"name":"Gaco Baco","score":6, "email": "qko@mail.com"}]']);