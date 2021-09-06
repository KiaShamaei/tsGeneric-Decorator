// function Logger(target : Function) {
// 	console.log('Logging...');
// 	console.log(target);
//   }
//-----------------factory decorator 
// function Logger (){
// 	return function (target  : Function){
// 		console.log("logger decorator ")
// 		console.log(target , "sig")
// 	}
// }
// function WithTemplate(template: string, hookId: string) {
// 	return function (_: Function) {
// 		console.log("with template ")
// 	  const hookEl = document.getElementById(hookId);
// 	  if (hookEl) {
// 		hookEl.innerHTML = template;
// 	  }
// 	}
//   }
//   @Logger()
//   @WithTemplate('<h1>My Person Object</h1>', 'app')
//   class Person {
// 	name = 'Max';
  
// 	constructor() {
// 	  console.log('Creating person object...');
// 	}
//   }
//   const pers = new Person();
// console.log(pers);

//decorators to prop------------------------------------------
//log for connect to prop 
// function Log(target: any, propertyName: string | Symbol) {
// 	console.log('Property decorator!');
// 	console.log(target, propertyName);
//   }
// //log 2  for connect to other part of a class accessors and methods
// function Log2(target :  any  , propname : string ,  description : PropertyDescriptor) {
// 	console.log(target, propname , description)
// }
//log3 decorator for connect to parameters in methods 
function Log3 (target : string  , paraname : string | symbol, position : number){
	console.log("this is from deco in parameters")
	console.log('Parameter decorator!');
	console.log(target);
	console.log(paraname);
	console.log(position);
}
class Product {
	// @Log
	title: string;
	private _price: number;
//   @Log2
	set price(val: number) {
	  if (val > 0) {
		this._price = val;
	  } else {
		throw new Error('Invalid price - should be positive!');
	  }
	}
  
	constructor(t: string, p: number) {
	  this.title = t;
	  this._price = p;
	}
  
	getPriceWithTax(@Log3 tax: number) {
	  return this._price * (1 + tax);
	}
  }