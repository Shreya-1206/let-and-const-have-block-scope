# Let and Const Have Block Scope ✌️

* Block is also called Compund Statement.
* A block combines multiple statements, in a place where js expects a single statement.
    
  Example : if(true) {
      var x =9;
      console.log("yes true");
      console.log(x);
    }

## How block behaves with these declaring variables ?
 * var is in global space 
 * let and const are in block scope
 * Hence they are stored in sepparte memo.
 * And once the block execution finishes, we cant access them.  


## In shadowing 
* var variable in block replaces the modifies the value of same var outside the block, this happens becuse of the same memory space of var .
* But in let and const when declared inside block { } they are hoisted and assigned value in block scope and when they are declared outside the scope they are in script scope......