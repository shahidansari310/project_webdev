/*
Write a program to calculate factorial of a number using reduce an for loops 
5!=1*2*3*4*5

*/
 



 console.log("hii");
let b=5;
//  let a=prompt("enter a number :");
function fa(number){
    let r=1
    for(let i=1; i<=number ;i++) {
         r=r*i
    } 
    //  return r
    console.log(r)
}
fa(b)

// let b=5;
// const a=prompt("enter a number");
// function fact(number){
//    let arr= Array.from(Array(number+1).keys());
//    console.log(arr.slice(1,));
//    let c =arr.slice(1,).reduce((a,b)=>{
//     return a*b
//    })
//    return c
// }

// fact(b);