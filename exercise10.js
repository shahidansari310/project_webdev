/* create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy
Amazing
fire

shop name:
engine
foods
garments

Another word:
bros
limited 
hub
*/


let rand=Math.random()
let first,second,third;

if(rand>0.33){
    first="crazy";
}
else if(rand<0.66 && rand>=0.33){
    first="Amazing";
}
else{
    first="fire";
}

rand=Math.random()

if(rand>0.33){
    second="engine";
}
else if(rand<0.66 && rand>=0.33){
    second="foods";
}
else{
    second="garments";
}


rand=Math.random()

if(rand>0.33){
    third="bros";
}
else if(rand<0.66 && rand>=0.33){
    third="limited";
}
else{
    third="hub";
}
console.log(`${first} ${second} ${third}`);