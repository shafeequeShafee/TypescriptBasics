"use strict";
console.log("hi");
var names;
names = "sfq";
console.log(names);
var greet = function () {
    console.log("hi sfq");
};
var greeting;
greeting = function () {
    console.log("hi sfq");
};
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(5, 5);
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 3);
console.log(result);
var minusing = function (a, b) {
    return a - b;
};
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greeted = function (user) {
    console.log("".concat(user.name, " has a uid of ").concat(user.uid));
};
var logDetailsAlias = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greetedAlias = function (user) {
    console.log("".concat(user.name, " has a uid of ").concat(user.uid));
};
var SayHello;
SayHello = function (name, greeting) {
    console.log("".concat(greeting, " ").concat(name));
};
var cal;
cal = function (numOne, numTwo, action) {
    if (action == "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
var LogDetail;
LogDetail = function (me) {
    console.log("hi ".concat(me.name, ", he is ").concat(me.age, " old"));
};
