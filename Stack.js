export default class Stack {
    constructor() {

      this.stack = [];
      
    }

    push(item) {
      this.stack.push(item);
    }

    pop() {
    return  this.stack.pop();
    
    }

    size(){
      return this.stack.length;
      
    }
    peek(){
      return this.stack[this.stack.length - 1];
    }

    view(){
        console.log('########')
        for(let i=this.stack.length-1; i>=0; i--){
          
          console.log(this.stack[i]);
        }
        console.log('########')
    }

    clearArray(){
        this.stack=[];
    }
   };
