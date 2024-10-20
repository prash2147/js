const userEmail = []
if (userEmail){
    console.log('Got user email');
    
}
else{
    console.log("Don't have user email");
    
}

// falsy values
// false, -0,0 ,Bigint 0n,"",null,undefind,NaN

//trythy values
// true,"0","false"," ",[],{},function(){}

// if (userEmail.length===0){
//     console.log("Array is empty");
    
// }

const emptyObj ={}
if (Object.keys(emptyObj).length ===0){
    console.log("object is empty");
    
}

//Nullish Coalescing Operator (??): null undefind
let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);

// terniary operator
// condition ? true : false
const iceprice = 100
iceprice<= 80 ? console.log("less than 80") : console.log("more than 80");
;

