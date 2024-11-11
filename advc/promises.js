const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "prashant", email: "prashant@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: 'prashant', password: 1234})
        } else{
            reject('ERROR: Someting went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("the promise is either resolved or rejected");
    
})

const promiseFive = Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'js',password: "123"})
        } else {
            reject('ERROR: js went wrong')
        }
    },1000)
})
    async function consumePromiseFive(){
        const response = await promiseFive
        console.log(response);
        
    }
consumePromiseFive()