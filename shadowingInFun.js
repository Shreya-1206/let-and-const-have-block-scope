

const c = 110;

function b() {
    const c = 120; // c declared in local space 
    console.log(c);
}
b();
console.log(c);

var a =10;

function x(){
    var a =100; /// we know that every execution context has its own local sscope
    console.log(a)
}
x();
console.log(a);


// illegal shadowing

let z =90; 
{
//  var z =99 
}

//legal 
var s =22;
{
    let s = 33
}

// possible
let f =80;
function n(){   /// because function has its own local space 
    var f =78;
    console.log(f);
}
n();
console.log(f);

// lexical scope in block 

const k =11;
{
    const k = 12;
    console.log(k); // 12
    {
        console.log(k); // undefined because when the block exexcutes it has k as undefined...
        const k = 13;
        console.log(k);//13 
    }
}
console.log(k) /// 11


const r =10;
{
    const r = 20;
    {
        const r = 30;
        console.log(r); //30
    }
    console.log(r); //20
}
console.log(r); /// 10