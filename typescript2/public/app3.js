"use strict";
exports.__esModule = true;
var me = {
    name: "sfq",
    age: 25,
    speak: function (text) {
        console.log(text);
    },
    spend: function (salaray) {
        console.log("i spend", salaray);
        return salaray;
    }
};
console.log("me:", me);
var someone;
var greetPerson = function (person) {
    console.log("hello", person.name);
};
greetPerson(me);
var invoice_js_1 = require("./classes/invoice.js");
var ListTemplate_js_1 = require("./classes/ListTemplate.js");
var Payment_js_1 = require("./classes/Payment.js");
var docOne;
var docTwo;
docOne = new invoice_js_1.Invoice("Claysys", "work for website", 200);
docTwo = new Payment_js_1.Payment("Ust", "work for AI", 300);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
var ul = document.querySelector('ul');
var list = new ListTemplate_js_1.ListTemplate(ul);
var formTag = document.querySelector('.myclass');
formTag.addEventListener('submit', function (e) {
    e.preventDefault();
    var docThree;
    docThree = new Payment_js_1.Payment("Ust", "work for AI", 300);
    list.render(docOne, 'heading', 'start');
});
