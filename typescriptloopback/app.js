var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Helloworld = /** @class */ (function () {
    function Helloworld(msg) {
        console.log(" hii ".concat(msg));
    }
    return Helloworld;
}());
var helloworld = new Helloworld('sfq');
console.log(helloworld);
///////    Generic Function  //////////
function LoggerAndReturn(thing) {
    return thing;
}
var msg1 = LoggerAndReturn("hellow world");
console.log(msg1);
var msg2 = LoggerAndReturn(100);
console.log(msg2);
function getArray(items) {
    return new Array().concat(items);
}
// let myNumArr = getArray<number>([100,200,300])
// let myStrArr = getArray<string>(['Hello','world'])
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(['Hello', 'world']);
console.log(myNumArr);
console.log(myStrArr);
// multiple type variables
function getInfo(id, name) {
    console.log(typeof id + ',' + typeof name);
}
getInfo(1, 'sfq');
// Generic with non generic type
function displayType(id, name) {
    console.log(typeof id + ',' + typeof name);
}
displayType(1, 'sfq');
///////   Generic Constraints
var Customer = /** @class */ (function () {
    function Customer(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    return Customer;
}());
function customerLogger(customer) {
    console.log("".concat(customer.firstname, "  ").concat(customer.lastname));
}
var customer = new Customer("sfq", "Rahman");
customerLogger(customer);
var p = {
    first: "10k",
    second: 1000,
    run: function () {
        return 3;
    }
};
console.log(p.run());
console.log(p);
function checkElementAt(items, toBeChecked, atIndex) {
    return items[atIndex] == toBeChecked;
}
var checker = checkElementAt;
var items = [1, 3, 5, 7];
var b = checker(items, 5, 1);
console.log(b);
var s = {
    enabled: true, maximized: false
};
console.log("s", s);
console.log(s['maximized']);
// / Generic Class  /////
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var List = /** @class */ (function () {
    function List() {
        this.data = [];
    }
    List.prototype.add = function (t) {
        this.data.push(t);
    };
    List.prototype.remove = function (t) {
        var index = this.data.indexOf(t);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    };
    List.prototype.asArray = function () {
        return this.data;
    };
    return List;
}());
var numbers = new List();
numbers.add(11);
numbers.add(12);
numbers.add(13);
numbers.remove(12);
var numArray = numbers.asArray();
console.log(numArray);
//////////////   Decorator ////////
// function log(target, key, descriptor){
//    console.log(`${key} was called`)
// }
// class Calculator{
//     //using the decorator @log
//     @log
//     square(n:number){
//         return n * n
//     }
// }
// function log(target, key, descriptor){
//     console.log(target)
//     const original = descriptor.value;
//     descriptor.value= function(...args:any[]){
//         // call the original method
//         const result = original.apply(this,args)
//         // log the call , and the result
//         console.log(`${key} with args ${JSON.stringify(args)} returned ${JSON.stringify(result)}`)
//         // return the result
//         return result;
//     }
//     return descriptor
//  }
//  class Calculator{
//      //using the decorator @log
//   
//      @log
//      square(n:number){
//          return n * n
//      }
//  }
//  const calculator = new Calculator();
//  //square with args [2] returned 4
//  calculator.square(2)
//   //square with args [3] returned 9
//   calculator.square(3)
//////  Configurable Decorator using Decorator Factory  /////////////
function log(title) {
    return function (target, key, descriptor) {
        console.log(target);
        var original = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // call the original method
            var result = original.apply(this, args);
            // log the call , and the result
            console.log("title ".concat(title, ", ").concat(key, " with args ").concat(JSON.stringify(args), " returned ").concat(JSON.stringify(result)));
            // return the result
            return result;
        };
        return descriptor;
    };
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    //using the decorator @log
    Calculator.prototype.square = function (n) {
        return n * n;
    };
    __decorate([
        log('Calculator')
    ], Calculator.prototype, "square", null);
    return Calculator;
}());
var calculator = new Calculator();
//square with args [2] returned 4
calculator.square(2);
//square with args [3] returned 9
calculator.square(3);
//////// Property Decorator /////
function property(target, key) {
    var value = target[key];
    // Replacement getter
    var getter = function () {
        console.log("getter for ".concat(key, " returned ").concat(value));
        return value;
    };
    // Replacement setter
    var setter = function (newVal) {
        console.log("Set ".concat(key, " to  ").concat(newVal));
        value = newVal;
    };
    // Replace the property
    var isDeleted = delete this[key];
    if (isDeleted) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
//parameter Decorator
function parameterDecorator(target, key, index) {
    console.log("key is ".concat(key, " and index is ").concat(index));
}
// class decorator
function model(constructor) {
    console.log(constructor);
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.calculateSalary = function (taxes, discount) {
        return this.salary * taxes;
    };
    __decorate([
        property // u can choose any name  /// njammak gettersum settersum okkae set cheyyaam
    ], Person.prototype, "firstName", void 0);
    __decorate([
        property
    ], Person.prototype, "salary", void 0);
    __decorate([
        __param(0, parameterDecorator),
        __param(1, parameterDecorator)
    ], Person.prototype, "calculateSalary", null);
    Person = __decorate([
        model
    ], Person);
    return Person;
}());
var person = new Person();
// call the setter function
person.firstName = "sfq";
// call the getter function
console.log(person.firstName);
var Home = /** @class */ (function () {
    function Home() {
    }
    return Home;
}());
var sfq = new Home();
sfq.firstname = "sfq";
console.log(sfq.firstname);
