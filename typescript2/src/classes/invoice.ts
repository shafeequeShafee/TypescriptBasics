import {HasFormatter} from '../interfaces/HasFormatter.js'


// export class Invoice{
//     readonly client:string;
//     private details:string;
//     public amount:number

//     constructor(c:string,d:string,a:number){
//         this.client=c;    // this refers to the instance of object we created based on this class
//         this.details=d;
//         this.amount=a;
//     }

//     format(){
//         return `${this.client} owes $ ${this.amount} for ${this.details}`
//     }
// }


export class Invoice implements HasFormatter{
    readonly client:string;
    private details:string;
    public amount:number

    constructor(c:string,d:string,a:number){
        this.client=c;    // this refers to the instance of object we created based on this class
        this.details=d;
        this.amount=a;
    }

    format(){
        return `${this.client} owes $ ${this.amount} for ${this.details}`
    }
}
