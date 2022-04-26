"use strict";
exports.__esModule = true;
var invoice_js_1 = require("./classes/invoice.js");
var inOne = new invoice_js_1.Invoice("Claysys", "work for website", 200);
var inTwo = new invoice_js_1.Invoice("Ust", "work for AI", 300);
console.log("inOne:", inOne);
console.log("inTwo:", inTwo);
var invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
console.log(invoices);
console.log(inOne.format());
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
var Company = (function () {
    function Company(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Company.prototype.format = function () {
        return "".concat(this.client, " owes $ ").concat(this.amount, " for ").concat(this.details);
    };
    return Company;
}());
var CompanyOne = new Company("Claysys", "work for website", 200);
var CompanyTwo = new Company("Ust", "work for AI", 300);
console.log("CompanyOne:", CompanyOne);
console.log("CompanyTwo:", CompanyTwo);
var anchor = document.querySelector('a');
console.log(anchor);
if (anchor) {
    console.log(anchor.href);
}
var anchor2 = document.querySelector('a');
console.log(anchor2.href);
var formTag = document.querySelector('.myclass');
var typeSelect = document.querySelector('#select');
console.log(typeSelect.value);
var nameInput = document.querySelector('#name');
var ageInput = document.querySelector('#age');
formTag.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("value are ".concat(typeSelect.value, " and ").concat(ageInput.valueAsNumber));
});
