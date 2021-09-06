// Code goes here!




//genric array type 
// const arr : Array < string | number >  = [] // arr = (string|number)[]

//genric promise type 
const call : Promise<string> = new Promise ((res)=>{
	setTimeout(()=>{
		res("this code is done")
	}, 2000)
})
call.then(e=>console.log(e.split(" ")))

//genric function 


// function merge (objA: object , objB: object) {
// 	return Object.assign(objA, objB);
//   }
  
//   const mergeObj = merge({ name: 'Max'}, { age: 30 });
//   mergeObj.name; // in this we have an error because ts doesnt known ant thing about type of mergeObj
function merge <T,U> (objA: T , objB: U) {
	return Object.assign(objA, objB);
  }
//better explain 
function mergeBetter  < T extends Object , U extends Object > (objA : T , objb : U){
	return Object.assign(objA , objb)
}
  
  const mergeObj = merge({ name: 'Max'}, { age: 30 });
  const mergeWithError = merge(20, {name: "ali"}) // in this we should have error but it doesnt 
  const mergeBetterError = mergeBetter(20 , {name: "kia"})
  console.log(mergeBetterError)


  //specific type 
//   function extractAndConvert(obj: object, key: string) {
// 	return 'Value: ' + obj[key];
//   }//this have error 
function extractAndConvert<T extends Object , U extends keyof T>(obj: T, key: U) {
	return 'Value: ' + obj[key];
  }

  //---------------------- genric in class 
//   class DataStorage {
// 	private data = [];
  
// 	addItem(item) {
// 	  this.data.push(item);
// 	}
  
// 	removeItem(item) {
// 	  this.data.splice(this.data.indexOf(item), 1);
// 	}
  
// 	getItems() {
// 	  return [...this.data];
// 	}
//   }//this code have alot of error about type 
  class DataStorage<T> {
	private data : T[] = [];
  
	addItem(item : T) {
	  this.data.push(item);
	}
  
	removeItem(item : T) {
	  this.data.splice(this.data.indexOf(item), 1);
	}
  
	getItems() {
	  return [...this.data];
	}
  }

  //-------------------- partial type generics
  interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
