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
    const datediff = endDate - startDate;
    const year = Math.floor(datediff / (1000 * 60 * 60 * 24 * 365.25));
    const remainingAfterYears = datediff - (year * 1000 * 60 * 60 * 24 * 365.25);
    const month = Math.floor(remainingAfterYears / (1000 * 60 * 60 * 24 * 30));
    const remainingAfterMonths = remainingAfterYears - (month * 1000 * 60 * 60 * 24 * 30);
    const day = Math.floor(remainingAfterMonths / (1000 * 60 * 60 * 24));  
    const remainingAfterDays = remainingAfterMonths - (day * 1000 * 60 * 60 * 24);
    const hour = Math.floor(remainingAfterDays / (1000 * 60 * 60));
    const remainingAfterHours = remainingAfterDays - (hour * 1000 * 60 * 60);
    const min = Math.floor(remainingAfterHours / (1000 * 60));
    const remainingAfterMinutes = remainingAfterHours - (min * 1000 * 60);


const sec = Math.floor(remainingAfterMinutes / 1000);

console.log(`Years: ${year}, Months: ${month}, Days: ${day}, Hours: ${hour}, Minutes: ${min}, Seconds: ${sec}`);

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