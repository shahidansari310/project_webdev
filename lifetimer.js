let isDOBOpen=false;
let dateofbirth;
const cogel=document.getElementById("cog");
const scontel=document.getElementById("scont");
const initialel=document.getElementById("initial");
const afterel=document.getElementById("after");
const dobButtonel=document.getElementById("dobButton");
const dobInputel=document.getElementById("dobInput");
const yearel=document.getElementById("year");
const monthel=document.getElementById("month");
const dayel=document.getElementById("day");
const hourel=document.getElementById("hour");
const minel=document.getElementById("min");
const secel=document.getElementById("sec");


const maketwo=(number)=>{
    return number > 9 ? number : `0${number}`;
};
const toggle = () => {
    if (isDOBOpen) {
        scontel.classList.add("hide");
    } else {
        scontel.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
    console.log("toggle", isDOBOpen);
};

const updateage=() =>{
    const currenDate= new Date();
    const datediff=currenDate-dateofbirth;
    const year=Math.floor(datediff/(1000*60*60*24*365));
    const month=Math.floor(datediff/(1000*60*60*24)%12);
    const day=Math.floor(datediff/(1000*60*60*24))%30;
    const hour=Math.floor(datediff/(1000*60*60))%24;
    const min=Math.floor(datediff/(1000*60))%60;
    const sec=Math.floor(datediff/(1000))%60;

    yearel.innerHTML=maketwo(year);
    monthel.innerHTML=maketwo(month);
    dayel.innerHTML=maketwo(day);
    hourel.innerHTML=maketwo(hour);
    minel.innerHTML=maketwo(min);
    secel.innerHTML=maketwo(sec);

};


const setdobhandler =() =>{
    const datestring =dobInputel.value;
    
    dateofbirth=datestring ? new Date(datestring) : null;

    if(dateofbirth){

        initialel.classList.add("hide");
        afterel.classList.remove("hide");
        setInterval(()=>updateage(),100);
    }
    else{
        afterel.classList.add("hide");
        initialel.classList.remove("hide");
    }
    
    
};

setdobhandler();

cogel.addEventListener("click",toggle);
dobButtonel.addEventListener("click",setdobhandler);