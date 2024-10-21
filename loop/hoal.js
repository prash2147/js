// for of
//["","",""]
//[{},{},{}]

// const arr = [1,2,3,5,6,7]
// for (const element of arr) {
//     console.log(element);
    
// }

// const greetings = "hello"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }

//Maps

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// console.log(map);
// for (const key of map) {
//     console.log(key);
    
// }

// for (const [key,value] of map) {
//     console.log(key,':-',value);
    
// }

// const myobj = {
//     'g1': 'dfjh',
//     'g2': 'djf'
// }
// //not work for object
// // for (const [key,value] of myobj) {
    
// // }

// //forin
// for (const key in myobj) {
//     console.log(key,": ",myobj[key]);
    
// }

// const programming = ["js","cpp","c","java","py"]
// for (const key in programming) {
//     console.log(programming[key]);
    
// }

//forEach
// programming.forEach(function(val){
//     console.log(val);
    
// })
// programming.forEach((valu)=>{
//     console.log(valu);
    
// })

// function printme(item,index,arr){
//     console.log(item,index,arr);
    
// }
// programming.forEach(printme)

const mycode = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName:"java",
        languageFile:"j"
    },{
        languageName: "python",
        languageFile:"py"
    }
]
mycode.forEach((item)=>{
    console.log(item.languageFile);
    
})