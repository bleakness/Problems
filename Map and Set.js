let person = {name: "alabala"};

//let mapping = new Map();
let mapObj = new Object();

mapObj[person] = 123;
//mapping.set(person, "hi");

//console.log(mapping.get(person))
console.log(mapObj[person])

let list = new Map([['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);

for (let vegetables of list) {
    console.log(vegetables)
}

list.forEach((value, key)=> {console.log(value,key)});

let obj = {name: "fak", lame: "beim", etc: "alabala"};

let map = new Map(Object.entries(obj));
let hi = new Map();
map.set('banana', 1);
map.set('granada', 2)
//let objFromMap = Object.fromEntries(map);
//console.log(objFromMap.banana);
console.log(map.get('name'));


function unique(arr) {
    /* your code */

    let unikum = Array.from(new Set(arr));

        return unikum;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare, Krishna, :-O
