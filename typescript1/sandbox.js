"use strict";
const charactor = "sfq";
let age = 30;
let isblackbelt = false;
//njammak declare cheytha varriables ntae type change cheyyaan pattooolla
// age='sfq'
// const aayi kainjal athintae value change cheyyaan pattullaa
//charactor= 'shaarvi'
console.log(charactor);
///////////////////////////////////////////////////////////
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(5));
//////////////////////////////////////////////////////////
let names = ['sfq', 'boss', 'tintu'];
names.push('raseena');
//names.push(5)
console.log(names);
/////////////////////////////////////////////////////
let mixed = ['sharvi', 'vipin', 10, false];
mixed.push(5);
mixed.push('shafaf');
console.log(mixed);
//////////////////////////////////
let me = {
    name: "sfq",
    job: "developer",
    age: 25,
};
me.age = 24;
// me.name=34  // we cannot do it
// me.skills =['c++','java'] // we cannot do it / we cannot add new property
me = {
    name: 'shaarvi',
    job: "ui developer",
    age: 24
};
//njammak puthiya property add cheyyaaan pattooolla
//////////////////////////////////
///////////  explicit types    /////
let song;
let time;
let isSuper;
time = 2.50;
// isSuper ="super"
/////  arrays
// let employs :string[]
let employs = [];
employs.push("sfq");
///// union types
let collection = []; // array aavumbol
collection.push("boss");
collection.push(25);
collection.push(false);
console.log("collection", collection);
let uid; // just oru varriable aavumbol
let my;
my = {
    name: "sfq",
    age: 25
};
let my2;
my2 = {
    name: "sfq",
    age: 23
};
//////////  any types //////////
let meone;
meone = 25;
meone = "sfq";
meone = false;
let mixedone = [];
let mythree;
mythree = {
    name: "sfq",
    age: "25"
};
