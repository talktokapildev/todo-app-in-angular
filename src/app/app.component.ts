import { Component,trigger,animate,style,transition,keyframes } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
   trigger("moveInLeft",[
      transition("void=> *",[style({transform:"translateX(300px)"}),
        animate(200,keyframes([
         style({transform:"translateX(300px)"}),
         style({transform:"translateX(0)"})
 
          ]))]),


          transition("*=>void",[style({transform:"translateX(0px)"}),
        animate(100,keyframes([
         style({transform:"translateX(0px)"}),
         style({transform:"translateX(300px)"})
 
          ]))])    
     
   	])

  ]
})
export class AppComponent {
  todoArray=[];
  todo;
  //todoForm: new FormGroup()

constructor(
    private router: Router
  ) {}

   addTodo(value){
    if(value!==""){
     this.todoArray.push(value)
     //todoForm.resetForm()
    //console.log(this.todos) 
  }else{
    alert('Field required **')
  }
    
  }

  /*delete item*/
  deleteItem(todo){
  	for(let i=0 ;i<= this.todoArray.length ;i++){
  		if(todo== this.todoArray[i]){
  			this.todoArray.splice(i,1)
  		}
  	}
  }

  // submit Form
  todoSubmit(value:any){
     if(value!==""){
    this.todoArray.push(value.todo)
     //this.todoForm.reset()
    }else{
      alert('Field required **')
    }
    
  }

  routeToUrl(){
    console.log('called', window.location.origin);
    //this.router.navigateByUrl(window.location.origin + '/primary');
    this.router.navigateByUrl('http://localhost:4200/primary');
    //this.router.navigate(['/primary']);
    //this.router.navigate(['../primary']);
  }
 
}




