// alert("Hello World");
// console.log("Hello World");
// // prompt("Hello World");

// var a=prompt("Enter your name");
// var b=confirm("Are you sure you want to enter your name?");
// if(a==""){
//     alert("Please enter your name"); 
// }

// document.write("Your name is : " + a);
// document.title="Hello World";

// var a=5;
// var b="Shahid";
// let c=7;
// const d=10;
// console.log(typeof a , typeof b ,typeof c);


// let a=document.getElementsByClassName("light-mode");
// let b=document.getElementsByClassName("dark-mode");         


// let f ={
//     name:"Shahid",
//     age:22,
//     city:"Mumbai",
//     country:"India",
// } 
// console.log(f);      

// let age=20;
// if(age>18){
//     console.log("You are eligible ");
// }
// else if(age==18){
//     console.log("You are *  eligible");
// }
// else{
//     console.log("You are not eligible");
// }


// let w=a>b ? "a is greater" : "b is greater";
// console.log(w);

// for(let i=0;i<=10;i++){
//     console.log("5"+ "*" +i +"=" + 5*i);
// }

// let obj={
//     name:"Shahid",
//     age:22,
//     city:"Mumbai",
//     country:"India",    
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element);
//     }
// }

// let b="Shahid";
// for (const c of b) {
//     console.log(c);
// }

// let i=5;
// while(i<10){
//     console.log(i);
//     i++;
// }
// let i=5;
// do{
//     console.log(i);
//     i++;
// }while(i<4);
// it will run one time even if the condition is false

// function greets(name){
//     console.log("Hello "+name);
// }

// function sum(a,b){
//     return a+b;
// }
// sum(5,6);
// console.log(sum(5,6));

// // Nan=Not a number

// const func1 =(x)=>{
//     console.log("Hello "+x);
// }
// func1("Shahid");

// let name="Shahid";
// let f="Anything";
// console.log(name + " " +f);
// console.log(`${name} ${f}`);
// console.log("Sha\"hid");


// let b = "Elephant";
// console.log(b.toUpperCase());
// console.log(b.toLowerCase());
// console.log(b.slice(1, 4));
// console.log(b.replace("Ele", "44"));


// console.log(b.concat("Ele", "44"));

// let arr = [1,3,4,5,7] ;
// console.log(typeof arr);
// console.log(arr.join(" and "));
// console.log(arr.shift());
// console.log(arr.unshift("1"));
//  splice

// let a=[1,93,5,6,88];
// for (let i=0; i<a.length;i++) {
//     const element=a[i];
//     console.log(element);
// }
// console.log(a.sort())

// for (const element of a) {
//     console.log(element);
// }


// let newac=[1,5,7,34,2,56,8,10];
// let newac= ac.map((e) =>{
//     return e**2;
// })
// console.log(newac);

// const greaterthan = (e) =>{
//     if(e>7){
//         return true
//     }
//     return false
// }
// console.log(newac.filter(greaterthan));

// const red =(a,b)=>{
//     return a*b
// }
// console.log(newac.reduce(red));


/*
document.body.childNodes
NodeList(7) [text, div, text, script, text, audio.audio-output, div#volume-booster-visusalizer]0: text1: div2: text3: script4: text5: audio.audio-output6: div#volume-booster-visusalizerlength: 7[[Prototype]]: NodeList
document.body.childNodes[0]
#text
document.body.childNodes[1]
<div>​…​</div>​
document.body.childNodes[1].childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]0: text1: div.box2: text3: div.box4: text5: div.box6: text7: div.box8: text9: div.box10: textlength: 11[[Prototype]]: NodeList
*/ 

console.log("hii");
let a=document.getElementsByClassName("box");
console.log(a);

a[1].style.backgroundColor="red";

let b=document.getElementById("red");
b.style.backgroundColor="yellow";

let c=document.querySelector(".box");
c.style.backgroundColor="blue";

let d=document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green";

})