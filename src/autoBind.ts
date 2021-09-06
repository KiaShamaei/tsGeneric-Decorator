//this is good example for decorators --------------------
//#1 define decorator and after that assign it to method 

function Autobind (_ :  any , _2 : any , description : PropertyDescriptor){
	const originalMethod = description.value ;
	const adjDescriptor  : PropertyDescriptor = {
		configurable : true ,
		enumerable : false ,
		get(){
		const boundFn = originalMethod.bind(this);
		return boundFn
		}
	}
	return adjDescriptor
		
	}

	class Printer {
		message = 'This works!';
	  
		@Autobind
		showMessage() {
		  alert(this.message);
		}
	  }
	  const p = new Printer()
	  const btn = document.querySelector ("#btn")!
	  btn?.addEventListener("click" , p.showMessage)
