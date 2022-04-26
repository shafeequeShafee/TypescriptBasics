class Helloworld {
    constructor(msg) {
        console.log(` hii ${msg}`)
    }
}
const helloworld = new Helloworld('sfq')
console.log(helloworld)


///////    Generic Function  //////////

function LoggerAndReturn<T>(thing: T): T {
    return thing
}

const msg1: string = LoggerAndReturn<string>("hellow world")
console.log(msg1)

const msg2: number = LoggerAndReturn<number>(100)
console.log(msg2)


function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items)
}

// let myNumArr = getArray<number>([100,200,300])
// let myStrArr = getArray<string>(['Hello','world'])

let myNumArr = getArray([100, 200, 300])
let myStrArr = getArray(['Hello', 'world'])
console.log(myNumArr)
console.log(myStrArr)

// multiple type variables
function getInfo<T, U>(id: T, name: U): void {
    console.log(typeof id + ',' + typeof name)
}

getInfo<number, string>(1, 'sfq')

// Generic with non generic type
function displayType<T>(id: T, name: string): void {
    console.log(typeof id + ',' + typeof name)
}
displayType<number>(1, 'sfq')


///////   Generic Constraints

class Customer {
    firstname: string;
    lastname: string;

    constructor(fname: string, lname: string) {
        this.firstname = fname;
        this.lastname = lname
    }
}

function customerLogger<T extends Customer>(customer: T): void {
    console.log(`${customer.firstname}  ${customer.lastname}`)
}

let customer = new Customer("sfq", "Rahman");
customerLogger(customer)

// customerLogger('shafeeque')
// customerLogger(1)                // eth randum work aaavooolla


///// Generic Interface ///////////

interface Pair<T, U, Z> {
    first: T;
    second: U;
    run(): Z

}

let p: Pair<string, number, number> = {
    first: "10k",
    second: 1000,
    run: function () {
        return 3
    }
}
console.log(p.run())
console.log(p)


interface ElementChecker {
    <T>(items: T[], toBeChecked: T, atIndex: number): boolean
}

function checkElementAt<T>(items: T[], toBeChecked: T, atIndex: number): boolean {
    return items[atIndex] == toBeChecked
}

let checker: ElementChecker = checkElementAt;
let items = [1, 3, 5, 7];
let b: boolean = checker<number>(items, 5, 1);
console.log(b)



////
interface States<R> {
    [state: string]: R;
}

let s: States<boolean> = {
    enabled: true, maximized: false
}

console.log("s", s)
console.log(s['maximized'])


// / Generic Class  /////

class GenericNumber<T>{
    zeroValue: T;
    add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y
}


interface Collection<T> {
    add(t: T): void;
    remove(t: T): void;
    asArray(): T[]
}

class List<T> implements Collection<T>{
    private data: T[] = [];

    add(t: T): void {
        this.data.push(t)
    }

    remove(t: T): void {
        let index = this.data.indexOf(t)
        if (index > -1) {
            this.data.splice(index, 1)
        }
    }
    asArray(): T[] {
        return this.data
    }
}

let numbers: Collection<number> = new List();
numbers.add(11);
numbers.add(12);
numbers.add(13);
numbers.remove(12);
let numArray = numbers.asArray();
console.log(numArray)


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


function log(title: string) {
    return function (target, key, descriptor) {
        console.log(target)
        const original = descriptor.value;
        descriptor.value = function (...args: any[]) {
            // call the original method
            const result = original.apply(this, args)
            // log the call , and the result
            console.log(`title ${title}, ${key} with args ${JSON.stringify(args)} returned ${JSON.stringify(result)}`)
            // return the result
            return result;
        }
        return descriptor
    }
}

class Calculator {
    //using the decorator @log
    @log('Calculator')
    square(n: number) {
        return n * n
    }
}

const calculator = new Calculator();

//square with args [2] returned 4
calculator.square(2)

//square with args [3] returned 9
calculator.square(3)


//////// Property Decorator /////


function property(target:any, key:string){
    let value = target[key];
    // Replacement getter

    const getter = function(){
        console.log(`getter for ${key} returned ${value}`);
        return value
    }

    // Replacement setter

    const setter = function(newVal){
        console.log(`Set ${key} to  ${newVal}`);
        value= newVal
    }

    // Replace the property

    const isDeleted = delete this[key];
    if(isDeleted){
       Object.defineProperty(target,key,{
           get:getter,
           set:setter,
           enumerable:true,
           configurable:true
       })
    }
}

//parameter Decorator
function  parameterDecorator(target:any , key:string, index:number){
    console.log(`key is ${key} and index is ${index}`)
}

// class decorator

function model(constructor:Function){
    console.log(constructor)
}

@model
class Person {
    @property  // u can choose any name  /// njammak gettersum settersum okkae set cheyyaam
    public firstName: string;
    @property
    public salary:number

    calculateSalary(@parameterDecorator taxes:number,
        @parameterDecorator discount:number):number{
        return this.salary * taxes
    }

}
const person = new Person()

// call the setter function
person.firstName ="sfq"

// call the getter function

console.log(person.firstName)


class Home{
    firstname:string;
    lastname:string
}
  const sfq=new Home()
  sfq.firstname="sfq"
  console.log(sfq.firstname)
