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

let obj={
    name:"Shahid",
    age:22,
    city:"Mumbai",
    country:"India",    
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
    }
}

