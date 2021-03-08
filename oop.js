const book = {
    title: "Are Krishna",
    author: "Me and my friends corporation",
    year: "2021",
    getSummary: function (){
        return `This "${this.title}" book was written by ${this.author} in ${this.year}`
    }
};

const book2 = {
    title: "Himalaya",
    author: "Joen Doe",
    year: "2012",
    getSummary: function (){
        return `This "${this.title}" book was written by ${this.author} in ${this.year}`
    }
};
// constructor

function bookTemplate(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
bookTemplate.prototype.getSummary = function () {
    return `This "${this.title}" book was written by ${this.author} in ${this.year}`
};

bookTemplate.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

bookTemplate.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}
// mag constr
function Magazine(title, author, year, month) {
    bookTemplate.call(this,title,author,year);

    this.month = month;
}
// mag obj
Magazine.prototype = Object.create(bookTemplate.prototype)
const mag1 = new Magazine('Mag One', 'Bathory', '1234', 'Jan');

console.log(mag1.getSummary())
// User magazine constr

Magazine.prototype.constructor = Magazine;

// Obj of protos

const bookProtos = {
    getSummary: function () {
        return `This "${this.title}" book was written by ${this.author} in ${this.year}`
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// creat object

const newbook = Object.create(bookProtos);
newbook.title = 'NEW BOOK'
newbook.author = 'NEW AUTHOR'
newbook.year = '48484';
//class book

class MyBook {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummer() {
        return `This "${this.title}" book was written by ${this.author} in ${this.year}`
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
    static topBooks(){
        return `Kosovo Book`
    }
}

// prawim obekt
class MyBook2 {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummer() {
        return `This "${this.title}" book was written by ${this.author} in ${this.year}`
    }
}
// mag subclass

class Magazine2 extends MyBook2 {
    constructor(title,author,year,month) {
        super(title,author,year);
        this.month = month;
    }
}

const hi = new Magazine2('Punk', 'VVV', '5554', 'Jan')
console.log(hi)
//console.log(newbook)
/*
const bookUno = new bookTemplate('Zonata na zdracha', 'Mariq Luiza III', '1986')
const bookSecond = new bookTemplate('Hello Art Code', 'The Matrix', '1999')
console.log(bookSecond.getAge());
bookUno.revise('2929')
console.log(bookUno)*/
