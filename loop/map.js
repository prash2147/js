const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

// const mytotal = myNumers.reduce(function(acc,currval){
//     console.log(`acc: ${acc}and current value ${currval }`);
//     return acc+currval
// },0)
// console.log(mytotal);

const mytotal = myNumers.reduce((acc,currval)=> acc+currval,0)
console.log(mytotal);

const shopping = [
    {
        course: "pyhton",
        price: 500
    },
    {
        course: "js",
        price: 400
    },
    {
        course: "java",
        price: 300
    }
]
const tatal = shopping.reduce((ini,item)=> ini+item,0)
console.log(tatal);
