console.log("hi")

let names:string
names="sfq"
console.log(names)

////////////////// Function basics   /////////////////////

let greet=()=>{
    console.log("hi sfq")
}


let greeting:Function;
greeting=()=>{
    console.log("hi sfq")
}

const add=(a:number, b:number ,c?:number|string )=>{   //c?:number|string  optional parameter => athinnu ? use cheyyum
     console.log(a+b)                                // enee default aayi value vennekil => c:number|string=10  egannae kodutha mathi
     console.log(c)
}

add(5,5)


const minus=(a:number, b:number)=>{
    return a-b
}

let result= minus(10,3)
console.log(result)

// eneee explicit aayi declare cheyyannekil
const minusing=(a:number, b:number):number=>{
    return a-b
}


//////////  Type Aliases  ////////////////////

const logDetails=(uid:string|number, item:string) =>{
    console.log(`${item} has a uid of ${uid}`)
}

const greeted=(user:{name:string,uid:string|number}) =>{
    console.log(`${user.name} has a uid of ${user.uid}`)
}

type StringOrNum = string | number

type objwithName ={
    name:string,
    uid:string|number
}

const logDetailsAlias=(uid:StringOrNum, item:string) =>{
    console.log(`${item} has a uid of ${uid}`)
}

const greetedAlias=(user:objwithName) =>{
    console.log(`${user.name} has a uid of ${user.uid}`)
}



//////////  Function Signature ////////////////

// example 1
let SayHello:(a:string,b:string)=>void;

SayHello =(name:string,greeting:string)=>{
    console.log(`${greeting} ${name}`)
}

// example 2

let cal:(a:number,b:number,c:string)=>number

cal=(numOne:number, numTwo:number, action:string)=>{
    if(action=="add"){
        return numOne + numTwo
    }
    else{
        return numOne - numTwo
    }
}

/// example 3

let LogDetail:(obj:{name:string, age:number})=>void

LogDetail=(me:{name:string, age:number})=>{
    console.log(`hi ${me.name}, he is ${me.age} old`)
}






