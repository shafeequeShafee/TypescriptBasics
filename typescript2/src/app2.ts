///////////  Classes  //////////////

// class Invoice{
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

import {Invoice} from './classes/invoice.js'

const inOne = new Invoice("Claysys", "work for website", 200)
const inTwo= new Invoice("Ust", "work for AI", 300)
console.log("inOne:",inOne)
console.log("inTwo:",inTwo)


let invoices:Invoice[]=[]
invoices.push(inOne)
invoices.push(inTwo)
console.log(invoices)
console.log(inOne.format())

 invoices.forEach(inv=>{
     console.log(inv.client,inv.amount,inv.format())
 })

//  inOne.client="Cognizant"  we cannotdue it because it is readonly



class Company{
    

    constructor(
        readonly client:string,
        private details:string,
        public amount:number
        ){

        }

    format(){
        return `${this.client} owes $ ${this.amount} for ${this.details}`
    }
}

const CompanyOne = new Company("Claysys", "work for website", 200)
const CompanyTwo= new Company("Ust", "work for AI", 300)
console.log("CompanyOne:",CompanyOne)
console.log("CompanyTwo:",CompanyTwo)















//////////  The DOM and Type Cating  ////////////////////

const anchor = document.querySelector('a');

console.log(anchor);
//  console.log(anchor.href);
if (anchor) {
    console.log(anchor.href);
}
  //allekil egannae cheythallum mathi

  const anchor2 = document.querySelector('a')!;
  console.log(anchor2.href)

  const formTag = document.querySelector('.myclass') as HTMLFormElement;
//   console.log(formTag)

  // inputs

  const typeSelect =document.querySelector('#select') as HTMLSelectElement;
  console.log(typeSelect.value)
  const nameInput =document.querySelector('#name') as HTMLInputElement;
  const ageInput =document.querySelector('#age') as HTMLInputElement;

  formTag.addEventListener('submit',(e:Event)=>{
      e.preventDefault();
      console.log(
          `value are ${typeSelect.value} and ${ageInput.valueAsNumber}`
      )
  })