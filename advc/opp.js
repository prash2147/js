const user = {
    username: "prashant",
    logincount: 7,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details from database");
        //console.log(`usernaem: ${this.username}`);
        //console.log(this);
        
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,logincount,islogedIn){
    this.username = username
    this.logincount = logincount
    this.islogedIn = islogedIn
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    //return this
}
const userOne = new User('chai',6,true)
const userTwo = new User('prashant',9,true)
 //console.log(userOne);
// console.log(userTwo);
//console.log(userOne.constructor);
console.log(typeof(userOne));



