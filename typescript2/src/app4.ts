//////////////  Generics ///////////

// used to create reusable code with different types

const addUID= (obj:object)=>{
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid}
}

let docOne = addUID({name:"sfq", age:24})
console.log(docOne)
// console.log(docOne.name)   // eth jsil working aanu but ts il working aalla


const addUIDGenerics= <T>(obj:T)=>{
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid}
}

let docTwo = addUIDGenerics({name:"sfq", age:24})
console.log(docTwo.name)  // GENERICS ADD CHEYUMBOL ATHINNU AARIYAM

// ENEEE SHREDIKENDATH

let docThree = addUIDGenerics('hello')  //eth eppo nthum pass cheyyaan pattunna pollae aanu but ath pattooolla athinnu

const addUIDGenericsExten= <T extends object>(obj:T)=>{
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid}
}

// let docFour = addUIDGenericsExten('hello')   // eppo evidae error verum, object mathram pass cheyyaan pattollu


//// enee njammakku nthekillum nirbantham aayyi venekil egannae cheytha mathi
const addUIDGenericsExtenspecific= <T extends {name:string}>(obj:T)=>{
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid}
}
let docFive = addUIDGenericsExtenspecific({name:"sfq", age:24})



/// with interface

interface Resource{
    uid:number;
    resourceName:string;
    data:object
}
const docSix:Resource={
    uid:1,
    resourceName:"SFQ",
    data:{
        name:"sfq"
    }
}



// Using generics
interface ResourceGeneric <T>{
    uid:number;
    resourceName:string;
    data:T
}

const docSeven:ResourceGeneric<string>={
    uid:1,
    resourceName:"SFQ",
    data:"sfq"
}


/// ENUMS ///////////

enum ResourceType{BOOK, AUTHOR,FILIM,DIRECTOR,PERSON}

interface ResourceTy{
    uid:number;
    resourceName:ResourceType.BOOK;
    data:string
}

const docEight:ResourceTy={
    uid:1,
    resourceName:ResourceType.BOOK,
    data:"sfq"
}

console.log("docEight",docEight)
