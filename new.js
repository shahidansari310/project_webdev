// create a faulty calculator

let random=Math.random()
let a=prompt("Enter 1st :")
let b=prompt("enter 2 :")
let c=prompt("enter opertaion :")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if (random>0.1){
    alert(eval(`${a} ${c} ${b}`));
}
else{
    c=obj[c];
    alert(eval(`${a} ${c} ${b}`));

}