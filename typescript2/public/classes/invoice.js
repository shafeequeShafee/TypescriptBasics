"use strict";
exports.__esModule = true;
exports.Invoice = void 0;
var Invoice = (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $ ").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
