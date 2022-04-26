//////////////   Module   ///////////////

// claases folder poyi nokukkaaa

////////////  Interface //////////////////////////

interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number
}

const me: IsPerson = {
    name: "sfq",
    age: 25,
    speak(text: string) {
        console.log(text)
    },
    spend(salaray: number) {
        console.log("i spend", salaray)
        return salaray
    }
}

console.log("me:", me)

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
    console.log("hello", person.name)
}

greetPerson(me)


////////////  Interface with Classes//////////////////////////

import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

let docOne: HasFormatter
let docTwo: HasFormatter


docOne = new Invoice("Claysys", "work for website", 200)

docTwo = new Payment("Ust", "work for AI", 300)

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs)

///////////////////////////////////////////   Html 


const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

var formTag = document.querySelector('.myclass')!;

formTag.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let docThree: HasFormatter;
    docThree = new Payment("Ust", "work for AI", 300)
    list.render(docOne,'heading','start')
});











