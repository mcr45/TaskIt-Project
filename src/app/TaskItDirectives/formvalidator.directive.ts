import { Directive } from '@angular/core';
import { AbstractControl,Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appFormvalidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:FormvalidatorDirective,
    multi:true
  }]
})
export class FormvalidatorDirective implements Validator {
today=new Date()
year=this.today.getFullYear().toString()
month=this.today.getMonth() + 1
day=this.today.getDate().toString()
date=this.year+'-'+this.month.toString()+'-'+this.day

  validate(control:AbstractControl): {[key: string]: any} | null{
/* console.log(control.value+'and'+typeof control.value+'oryyyyy*****'+new Date(control.value).toUTCString()+'********')
console.log(this.date) *//*
console.log(new Date(control.value).getTime(),new Date().getTime()) */
/* let a=new Date(control.value)
let b=new Date()
console.log(control.value, new Date().toLocaleDateString())
console.log('new data from a:'+new Date(a)+'aaaandADJAFNAINFIANFIANI'+new Date(b)) */


let controldate=control.value.split('-')
let d=new Date().getDate()
let m=new Date().getMonth()
let y=new Date().getFullYear()
let oggi=new Date(y,m,d)
/* console.log('sonowqUUUUUIIIIFAIFNA',new Date(y,m,d))
controldate[1]=(Number(controldate[1])-1).toString()
console.log(controldate) */
controldate[1]=(Number(controldate[1])-1).toString()
console.log('new date complessa'+new Date(controldate[0],controldate[1],controldate[2]))
console.log(new Date(controldate[0],(controldate[1]),controldate[2]).getTime()==oggi.getTime())


if(new Date(controldate[0],(controldate[1]),controldate[2]).getTime()<oggi.getTime()){
  return {'dateinvalid':true}
}
return null

  }

  constructor() { }

}
