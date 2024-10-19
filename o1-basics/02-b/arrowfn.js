const user = {
    username: "prashant",
    password: 323,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
        
        
    }
}
user.welcomeMessage()
user.username = "chai"
user.welcomeMessage()

// console.log(thsi);

// function chai(){
//     let username = "prahsant"
//     console.log(this.username);
    
//  }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}
chai()

// const addtwo = (num1 , num2) => {
//     return num1+num2
// }
// console.log(addtwo(3,5));

// const addtwo = (num1 , num2) => num1 + num2
// const addtwo = (num1 , num2) => (num1 + num2)
const addtwo = (num1 , num2) => ({usefor: 'return'})
console.log(addtwo(3,5));

//Imediatedly Invoked Function Expressions
(function iife(){
    console.log("DB Connected");
    
 })();
// ( function a() {
//     console.log("iife");
// })();


( (name) => {
    console.log(`DB ${name}`);
})("prashant");
