const charactor = "sfq";
let age =30;
let isblackbelt=false;

//njammak declare cheytha varriables ntae type change cheyyaan pattooolla
// age='sfq'

// const aayi kainjal athintae value change cheyyaan pattullaa
//charactor= 'shaarvi'

console.log(charactor)
///////////////////////////////////////////////////////////

const circ=(diameter:number)=>{
    return diameter *   Math.PI
}
console.log(circ(5))

//////////////////////////////////////////////////////////

let names =['sfq','boss','tintu'];
names.push('raseena');
//names.push(5)
console.log(names)

/////////////////////////////////////////////////////

let mixed =['sharvi','vipin',10, false]
mixed.push(5)
mixed.push('shafaf')
console.log(mixed)

//////////////////////////////////

let me ={
    name:"sfq",
    job:"developer",
    age:25,
}

me.age=24;
// me.name=34  // we cannot do it
// me.skills =['c++','java'] // we cannot do it / we cannot add new property

me={
    name:'shaarvi',
    job:"ui developer",
    age:24
}

//njammak puthiya property add cheyyaaan pattooolla


//////////////////////////////////


///////////  explicit types    /////

let song :string;
let time:number;
let isSuper:boolean;

time=2.50;
// isSuper ="super"

/////  arrays

// let employs :string[]
let employs :string[]=[];
employs.push("sfq")

///// union types

let collection:(string|number|boolean)[]=[];  // array aavumbol
collection.push("boss")
collection.push(25)
collection.push(false)
console.log("collection",collection)

let uid :string| number; // just oru varriable aavumbol

let my :object;
my={
    name:"sfq",
    age:25
}

let my2:{
    name:string,
    age:number
}
my2={
    name :"sfq",
    age:23
}

//////////  any types //////////

let meone:any
meone=25;
meone="sfq";
meone=false;

let mixedone:any[]=[];

let mythree:{   // we declaring the type not value
    name:any,
    age:any
}

mythree={
    name:"sfq",
    age:"25"
}
