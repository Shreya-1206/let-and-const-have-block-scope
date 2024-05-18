if(true) true; // if statement needs a statement and if doesn't have {} we provide to combine multiple statement.....

if(true) console.log("yes");


{
    var x =90;
    let a = 100;
    const b = 150;
    console.log(x);
    console.log(a);
    console.log(b);
}
 console.log(x); //accessible because x is in global space 
//   console.log(a); not accessible because a is in block space
//   console.log(b); not accessible because b is in block space


// Shadowing in js

var b = 5;      // var case of shadowing
{
    var b = 10;
    let d = 2;
    const e =90;
    console.log(b);
    console.log(d);
    console.log(e);
}
console.log(b); //accessible because b is in global space


// Shadowing behaves same in functionss
